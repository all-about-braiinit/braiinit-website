import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface RateLimitData {
  lastSubmission: number;
  submissions: number[];
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [rateLimitStatus, setRateLimitStatus] = useState<{
    canSubmit: boolean;
    timeUntilNext: number;
    submissionsLeft: number;
  }>({
    canSubmit: true,
    timeUntilNext: 0,
    submissionsLeft: 5
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyWebsite: "",
    projectArea: "",
    projectBudget: "",
    projectDetails: ""
  });

  // Check rate limits on component mount and set up interval
  useEffect(() => {
    checkRateLimit();
    const interval = setInterval(checkRateLimit, 1000);
    return () => clearInterval(interval);
  }, []);

  const getRateLimitData = (): RateLimitData => {
    const stored = localStorage.getItem('contactFormRateLimit');
    if (!stored) {
      return { lastSubmission: 0, submissions: [] };
    }
    return JSON.parse(stored);
  };

  const setRateLimitData = (data: RateLimitData) => {
    localStorage.setItem('contactFormRateLimit', JSON.stringify(data));
  };

  const checkRateLimit = () => {
    const now = Date.now();
    const data = getRateLimitData();

    const twentyFourHoursAgo = now - (24 * 60 * 60 * 1000);
    data.submissions = data.submissions.filter(time => time > twentyFourHoursAgo);

    const oneMinuteAgo = now - (60 * 1000);
    const canSubmitCooldown = data.lastSubmission < oneMinuteAgo;
    const canSubmitDaily = data.submissions.length < 5;

    const timeUntilNext = canSubmitCooldown ? 0 : Math.ceil((data.lastSubmission + 60000 - now) / 1000);
    const submissionsLeft = 5 - data.submissions.length;

    setRateLimitStatus({
      canSubmit: canSubmitCooldown && canSubmitDaily,
      timeUntilNext,
      submissionsLeft
    });

    setRateLimitData(data);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   // File type validation
  //   const allowedTypes = [
  //     'application/pdf',
  //     'application/msword',
  //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  //     'application/vnd.ms-excel',
  //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  //   ];

  //   if (!allowedTypes.includes(file.type)) {
  //     toast({
  //       title: "Invalid File Type",
  //       description: "Please upload PDF, DOC, or Excel files only.",
  //       variant: "destructive",
  //     });
  //     e.target.value = '';
  //     return;
  //   }

  //   // File size validation (5MB limit)
  //   const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  //   if (file.size > maxSize) {
  //     toast({
  //       title: "File Too Large",
  //       description: "File size must be less than 5MB.",
  //       variant: "destructive",
  //     });
  //     e.target.value = '';
  //     return;
  //   }

  //   setFormData(prev => ({
  //     ...prev,
  //     projectFile: file
  //   }));
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB'); // DD/MM/YYYY format
    const time = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }); // HH:MM format

    e.preventDefault();

    if (!rateLimitStatus.canSubmit) {
      if (rateLimitStatus.timeUntilNext > 0) {
        toast({
          title: "Please Wait",
          description: `You can submit again in ${rateLimitStatus.timeUntilNext} seconds.`,
          variant: "destructive",
        });
      } else if (rateLimitStatus.submissionsLeft === 0) {
        toast({
          title: "Daily Limit Reached",
          description: "You have reached the maximum of 5 submissions per day. Please try again tomorrow.",
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.projectArea) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields (Name, Email, Project Area).",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // // Convert file to base64 for JSON submission if file exists
      // let fileData = null;
      // if (formData.projectFile) {
      //   const fileBase64 = await new Promise<string>((resolve, reject) => {
      //     const reader = new FileReader();
      //     reader.onload = () => resolve(reader.result as string);
      //     reader.onerror = reject;
      //     reader.readAsDataURL(formData.projectFile!);
      //   });

      //   fileData = {
      //     name: formData.projectFile.name,
      //     type: formData.projectFile.type,
      //     size: formData.projectFile.size,
      //     data: fileBase64
      //   };
      // }

      // Send data to webhook

      const response = await fetch("https://hook.us2.make.com/tjwiytlv22artn3g5vuyecltuga3owsx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          companyWebsite: formData.companyWebsite,
          projectArea: formData.projectArea,
          projectBudget: formData.projectBudget,
          projectDetails: formData.projectDetails,
          submittedDate: date,
          submittedTime: time,
          source: "Contact Form - Website"
        }),
      });

      if (response.ok) {
        const now = Date.now();
        const data = getRateLimitData();
        data.lastSubmission = now;
        data.submissions.push(now);
        setRateLimitData(data);

        toast({
          title: "Inquiry Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          companyWebsite: "",
          projectArea: "",
          projectBudget: "",
          projectDetails: ""
        });

        // Reset file input
        const fileInput = document.getElementById('projectFile') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

        setTimeout(() => {
          setIsFormVisible(false);
        }, 2000);

      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (!isFormVisible) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 text-6xl">✅</div>
        <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
        <p className="text-muted-foreground">Your inquiry has been submitted successfully.</p>
        <p className="text-sm text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">That's the first step towards your AI Success!</h2>
        <p className="text-muted-foreground">Tell us about your project and we'll get back to you in no time.</p>
      </div>

      {/* Rate limit warning */}
      {(!rateLimitStatus.canSubmit || rateLimitStatus.submissionsLeft <= 2) && (
        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
          <div className="text-sm text-amber-800 dark:text-amber-200">
            {rateLimitStatus.timeUntilNext > 0 && (
              <p>⏱️ Please wait {rateLimitStatus.timeUntilNext} seconds before submitting again.</p>
            )}
            {rateLimitStatus.submissionsLeft <= 2 && rateLimitStatus.submissionsLeft > 0 && (
              <p>⚠️ You have {rateLimitStatus.submissionsLeft} submission{rateLimitStatus.submissionsLeft !== 1 ? 's' : ''} remaining today.</p>
            )}
            {rateLimitStatus.submissionsLeft === 0 && (
              <p>🚫 Daily submission limit reached. Please try again tomorrow.</p>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john@company.com"
            required
          />
          <p className="text-sm text-muted-foreground">
            The meeting invite will be shared on this email
          </p>
        </div>

        {/* Company Website */}
        <div className="space-y-2">
          <Label htmlFor="companyWebsite">Company Website</Label>
          <Input
            id="companyWebsite"
            type="url"
            value={formData.companyWebsite}
            onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
            placeholder="https://yourcompany.com"
          />
        </div>

        {/* Project Area */}
        <div className="space-y-2">
          <Label htmlFor="projectArea">Project Area *</Label>
          <Select onValueChange={(value) => handleInputChange("projectArea", value)} value={formData.projectArea}>
            <SelectTrigger>
              <SelectValue placeholder="Select project area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AI Strategy & Consulting">AI Strategy & Consulting</SelectItem>
              <SelectItem value="AI Voice Agent Development">AI Voice Agent Development</SelectItem>
              <SelectItem value="AI ChatBot Development">AI ChatBot Development</SelectItem>
              <SelectItem value="Custom SaaS Development">Custom SaaS Development</SelectItem>
              <SelectItem value="Business Automation">Business Automation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Budget */}
        <div className="space-y-2">
          <Label htmlFor="projectBudget">Project Budget</Label>
          <Select onValueChange={(value) => handleInputChange("projectBudget", value)} value={formData.projectBudget}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="<$10K">Less than $10K</SelectItem>
              <SelectItem value="$10K-$50K">$10K - $50K</SelectItem>
              <SelectItem value="$50K-$100K">$50K - $100K</SelectItem>
              <SelectItem value="$100K+">$100K+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <Label htmlFor="projectDetails">Project Details</Label>
          <Textarea
            id="projectDetails"
            value={formData.projectDetails}
            onChange={(e) => handleInputChange("projectDetails", e.target.value)}
            placeholder="Tell us about your project, goals, and any specific requirements..."
            rows={4}
          />
        </div>

        {/* File Upload
        <div className="space-y-2">
          <Label htmlFor="projectFile">Upload Project File (Optional)</Label>
          <Input
            id="projectFile"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          <p className="text-xs text-muted-foreground">
            Supported formats: PDF, DOC, DOCX, XLS, XLSX (Max 5MB)
          </p>
          {formData.projectFile && (
            <p className="text-sm text-green-600">
              ✓ File selected: {formData.projectFile.name}
            </p>
          )}
        </div> */}

        <div className="flex gap-3 w-full">
          <Button
            type="submit"
            className="flex-1"
            disabled={isSubmitting || !rateLimitStatus.canSubmit}
          >
            {isSubmitting ? "Sending..." :
              !rateLimitStatus.canSubmit ?
                (rateLimitStatus.timeUntilNext > 0 ? `Wait ${rateLimitStatus.timeUntilNext}s` : "Daily Limit Reached") :
                "Send Inquiry"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => window.open('https://calendly.com/braiinit/30min', '_blank', 'noopener,noreferrer')}
          >
            Book a Call
          </Button>
        </div>

        {/* <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !rateLimitStatus.canSubmit}
        >
          {isSubmitting ? "Sending..." :
            !rateLimitStatus.canSubmit ?
              (rateLimitStatus.timeUntilNext > 0 ? `Wait ${rateLimitStatus.timeUntilNext}s` : "Daily Limit Reached") :
              "Send Inquiry"}
        </Button> */}
      </form>
    </div>
  );
};
