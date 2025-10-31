import React from "react";
import styles from "../privacy-policy/legal.module.scss";

export const metadata = {
  title: "Terms of Service — Arka Labs",
  description: "Terms of Service for Arka Labs software development services",
};

export default function TermsOfService() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalContent}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Arka Labs website and services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2>2. Description of Services</h2>
            <p>
              Arka Labs provides software development services, including but not limited to:
            </p>
            <ul>
              <li><strong>MVP Development:</strong> Building complete SaaS MVPs in ≤ 21 days, including landing pages, authentication, security, database setup, SEO, AI integrations, 2-3 core features, analytics, and production deployment</li>
              <li><strong>Monthly Retainer Services:</strong> Ongoing engineering partnership for scaling MVPs, maintenance, new feature development, and AI/internal tool creation</li>
              <li><strong>Consultation Services:</strong> Technical consultation and project planning</li>
            </ul>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <p>When using our Services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our Services only for lawful purposes</li>
              <li>Not interfere with or disrupt our Services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2>4. Service Terms and Pricing</h2>
            <h3>4.1 MVP Development ($2,600 one-time)</h3>
            <p>
              Our MVP development service includes a comprehensive package delivered within 21 days or less. The scope includes authentication, security implementation, database setup, SEO configuration, AI integrations, 2-3 agreed-upon core features, analytics setup, and production deployment on the client&apos;s domain.
            </p>

            <h3>4.2 Monthly Retainer ($1,500/month)</h3>
            <p>
              Our retainer service provides ongoing engineering support, including scaling existing MVPs, maintenance, continuous feature development, and building multiple AI-powered or internal tools. The service is billed monthly and can be canceled with 30 days&apos; notice.
            </p>

            <h3>4.3 Payment Terms</h3>
            <ul>
              <li>MVP Development: 50% upfront, 50% upon delivery</li>
              <li>Monthly Retainer: Billed at the beginning of each month</li>
              <li>Payments are non-refundable once work has commenced</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2>5. Project Scope and Changes</h2>
            <p>
              The scope of work will be defined in a separate project agreement or statement of work. Any changes to the agreed scope may result in additional fees and timeline adjustments. We will provide written estimates for any scope changes before proceeding.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <h3>6.1 Client Ownership</h3>
            <p>
              Upon full payment, all custom code and deliverables created specifically for your project will be transferred to you. This includes source code, documentation, and project-specific assets.
            </p>

            <h3>6.2 Third-Party Components</h3>
            <p>
              Projects may include third-party libraries, frameworks, and open-source components that remain subject to their respective licenses. We will disclose all third-party components used in your project.
            </p>

            <h3>6.3 Arka Labs Tools and Methodologies</h3>
            <p>
              We retain ownership of our proprietary tools, methodologies, templates, and general knowledge used in providing services.
            </p>
          </section>

          <section>
            <h2>7. Confidentiality</h2>
            <p>
              We agree to keep confidential any proprietary information you share with us during the course of our engagement. We will not disclose your business information, trade secrets, or project details to third parties without your consent, except as required by law.
            </p>
          </section>

          <section>
            <h2>8. Warranties and Disclaimers</h2>
            <h3>8.1 Service Warranty</h3>
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner. We will address any defects or issues identified within 30 days of project delivery at no additional cost.
            </p>

            <h3>8.2 Disclaimer</h3>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT YOUR PROJECT WILL ACHIEVE SPECIFIC BUSINESS OUTCOMES OR REVENUE TARGETS.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARKA LABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO OUR SERVICES.
            </p>
            <p>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
            </p>
          </section>

          <section>
            <h2>10. Termination</h2>
            <p>
              Either party may terminate the service agreement with written notice:
            </p>
            <ul>
              <li>MVP Projects: Upon mutual agreement; client remains responsible for payment for work completed</li>
              <li>Monthly Retainer: 30 days&apos; written notice required</li>
              <li>We reserve the right to terminate immediately for non-payment or violation of these Terms</li>
            </ul>
          </section>

          <section>
            <h2>11. Support and Maintenance</h2>
            <p>
              MVP Development includes 30 days of post-launch support for bug fixes and minor adjustments. Extended support and ongoing maintenance are available through our Monthly Retainer service.
            </p>
          </section>

          <section>
            <h2>12. Third-Party Services</h2>
            <p>
              Projects may integrate with third-party services (e.g., OpenAI, payment processors, hosting providers). You are responsible for maintaining your own accounts and complying with the terms of these third-party services. We are not liable for third-party service interruptions or changes.
            </p>
          </section>

          <section>
            <h2>13. Communication and Scheduling</h2>
            <p>
              We use various communication channels including email, video calls (via Calendly scheduling), and our website chatbot. By using our Services, you consent to receive communications from us regarding your project.
            </p>
          </section>

          <section>
            <h2>14. Governing Law and Disputes</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Arka Labs operates. Any disputes arising from these Terms or our Services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes may be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2>15. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by updating the &ldquo;Last Updated&rdquo; date and, where appropriate, through email notification. Your continued use of our Services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2>16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2>17. Entire Agreement</h2>
            <p>
              These Terms, together with any project-specific agreements or statements of work, constitute the entire agreement between you and Arka Labs regarding our Services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2>18. Contact Information</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <p>
              <strong>Email:</strong> admin@arkalalchakravarty.com<br />
              <strong>Website:</strong> nixpexel.dev<br />
              <strong>Scheduling:</strong> <a href="https://calendly.com/arkalal-chakravarty/30min" target="_blank" rel="noopener noreferrer">Book a consultation</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
