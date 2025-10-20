import React from "react";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4" style={{paddingTop: "50px"}}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: September 10, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                At BraiinIt, we collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal information (name, email address, company details)</li>
                <li>Project requirements and business information</li>
                <li>Communication preferences and meeting scheduling data</li>
                <li>Website usage data and analytics information</li>
                <li>Payment and billing information for our services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our AI development services</li>
                <li>Process payments and send billing-related communications</li>
                <li>Respond to your comments, questions, and provide customer support</li>
                <li>Schedule consultations and manage project communications</li>
                <li>Send technical notices, security alerts, and administrative messages</li>
                <li>Analyze usage patterns to improve our website and services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">3. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With trusted service providers who assist in operating our business (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure data transmission protocols, and regular security assessments. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Project-related data may be retained for the duration of our business relationship and for a reasonable period afterward for legal and business purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct or update your personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website, analyze website traffic, and understand user preferences. You can control cookies through your browser settings, though disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party services such as Calendly for meeting scheduling. These services have their own privacy policies, and we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                Email: privacy@braiinit.com
                <br />
                Website: www.braiinit.com
                <br />
                <br />
                For data protection inquiries, please include "Privacy Inquiry" in the subject line.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
