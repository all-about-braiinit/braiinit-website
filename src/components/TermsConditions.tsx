import React from "react";

export const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4" style={{paddingTop: "50px"}}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: September 10, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using BraiinIt's website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our AI development services, consultations, and any related services provided by BraiinIt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                BraiinIt provides AI development services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>AI Strategy & Consulting</li>
                <li>Custom AI Development Solutions</li>
                <li>Machine Learning Implementation</li>
                <li>Process Automation Services</li>
                <li>Data Analytics and AI Training</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information provided to us is accurate, complete, and up-to-date. You must not use our services to engage in any illegal activities or violate any applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by BraiinIt and are protected by copyright, trademark, and other intellectual property laws. Custom solutions developed specifically for clients remain the property of the respective client upon full payment completion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms will be specified in individual service agreements. All fees are non-refundable unless specifically stated otherwise in writing. We reserve the right to suspend or terminate services for non-payment of fees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, BraiinIt shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We understand the sensitive nature of business information shared during our engagements. All client information will be treated as confidential and will not be disclosed to third parties without explicit written consent, except as required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate services with written notice as specified in the individual service agreement. Upon termination, all outstanding payments become immediately due, and access to services will be suspended.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
                <br />
                Email: hello@braiinit.com
                <br />
                Website: www.braiinit.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
