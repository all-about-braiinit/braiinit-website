import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    companyName: "",
    companyWebsite: "",
    companySize: "",
    revenue: "",
    budget: "",
    services: [] as string[],
    message: ""
  });

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Tell us where you're at with BraiinIt</h2>
        <p className="text-muted-foreground">Let's discuss your AI transformation journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">What is your name?</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">What is your email?</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">What is your role in the company?</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
            required
          />
        </div>

        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyWebsite">Company Website</Label>
            <Input
              id="companyWebsite"
              value={formData.companyWebsite}
              onChange={(e) => setFormData(prev => ({ ...prev, companyWebsite: e.target.value }))}
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Company Size</Label>
            <Select value={formData.companySize} onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-20">Less than 20</SelectItem>
                <SelectItem value="20-50">20-50</SelectItem>
                <SelectItem value="50-100">50-100</SelectItem>
                <SelectItem value="100-500">100-500</SelectItem>
                <SelectItem value="more-than-500">More than 500</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Company's Annual Revenue</Label>
            <Select value={formData.revenue} onValueChange={(value) => setFormData(prev => ({ ...prev, revenue: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select revenue range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-100k">Less than $100K</SelectItem>
                <SelectItem value="100k-500k">$100K-$500K</SelectItem>
                <SelectItem value="500k-1m">$500K-$1M</SelectItem>
                <SelectItem value="1m-2m">$1M-$2M</SelectItem>
                <SelectItem value="more-than-2m">More than $2M</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Project Budget</Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-10k">Less than $10K</SelectItem>
                <SelectItem value="10k-50k">$10K-$50K</SelectItem>
                <SelectItem value="50k-100k">$50K-$100K</SelectItem>
                <SelectItem value="more-than-100k">More than $100K</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <Label>What services are you interested in?</Label>
          <div className="space-y-3">
            {[
              "Identifying AI opportunities",
              "Educating your team on AI",
              "Developing custom AI solutions"
            ].map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={formData.services.includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                />
                <Label htmlFor={service} className="text-sm font-normal">
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="Tell us about your project or questions..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Send inquiry
        </Button>
      </form>
    </div>
  );
};