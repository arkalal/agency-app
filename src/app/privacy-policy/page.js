import React from "react";
import styles from "./legal.module.scss";

export const metadata = {
  title: "Privacy Policy — Arka Labs",
  description: "Privacy Policy for Arka Labs software development services",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalContent}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Arka Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to
              protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>
              We collect information that you voluntarily provide to us when
              you:
            </p>
            <ul>
              <li>Contact us through our website or chatbot</li>
              <li>Schedule a consultation call</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Engage our services</li>
            </ul>
            <p>
              This information may include: name, email address, company name,
              project details, and any other information you choose to provide.
            </p>

            <h3>2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul>
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referral sources</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>
                Communicate with you about projects, consultations, and services
              </li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>
                Send you updates, newsletters, and marketing communications
                (with your consent)
              </li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. AI Chatbot Data Processing</h2>
            <p>
              Our website features an AI-powered chatbot to assist you. When you
              interact with the chatbot:
            </p>
            <ul>
              <li>
                Your messages are processed through third-party AI services
                (OpenRouter/OpenAI)
              </li>
              <li>
                Conversation data may be temporarily stored for quality
                improvement
              </li>
              <li>
                We do not share personally identifiable information without your
                consent
              </li>
              <li>Chat sessions are encrypted in transit</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                assist in operating our website and providing services (e.g.,
                hosting, analytics, scheduling tools like Calendly)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, sale, or acquisition
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>
              To exercise these rights, please contact us at the email provided
              below.
            </p>
          </section>

          <section>
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyze site traffic, and understand user
              behavior. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g.,
              Calendly for scheduling). We are not responsible for the privacy
              practices of these external sites. We encourage you to review
              their privacy policies.
            </p>
          </section>

          <section>
            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated &ldquo;Last Updated&rdquo; date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <p>
              <strong>Email:</strong> admin@arkalalchakravarty.com
              <br />
              <strong>Website:</strong> nixpexel.dev
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
