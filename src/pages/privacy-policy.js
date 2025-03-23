import React from "react";
import servicesBg from "../assets/images/services-bg.png";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="container privacy-terms">
      <div className="relative mb-16">
        <div
          className="p-12 w-full h-[calc(100vh-90px)] md:h-[calc(100vh-125px)] rounded-40 bg-cover bg-center bg-no-repeat relative z-10 flex justify-center"
          style={{ backgroundImage: `url(${servicesBg.src})` }}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <h1
              className="text-4xl md:text-6xl text-white-light text-center z-10 font-archivo font-semibold"
              style={{ letterSpacing: "-2px" }}
            >
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold">Privacy Policy</h2>
        <h3 className="text-base font-medium">Effective Date: 05-Mar-2025 </h3>
      </div>
      <div>
        <p className="mb-5">
          At Ranav Technologies, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data when you
          engage with our IT services, mobile app development, and website
          development solutions.
        </p>
        <h4 className="text-xl font-medium my-2">Information We Collect</h4>
        <p>We may collect the following types of information:</p>
        <ul className="list-items">
          <li>
            Personal Information: Name, email, phone number, company details
            (when contacting us or using our services).
          </li>
          <li>
            Technical Data: IP address, browser type, operating system, and
            usage details collected through cookies and analytics.
          </li>
          <li>
            Project Information: Any data or content shared with us for
            development purposes.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">
          How We Use Your Information
        </h4>
        <p>We use your data to:</p>
        <ul className="list-items">
          <li>Deliver and improve our services.</li>
          <li>
            Communicate updates, support, and project-related information.
          </li>
          <li>Enhance website functionality and user experience.</li>
          <li>Process transactions and maintain business records.</li>
          <li>Comply with legal obligations and ensure security.</li>
        </ul>{" "}
        <h4 className="text-xl font-medium my-2">Data Security & Protection</h4>
        <p>We implement strict security measures, including:</p>
        <ul className="list-items">
          <li>Encryption: Securing sensitive data in transit and storage.</li>
          <li>
            Access Control: Restricting data access to authorized personnel.
          </li>
          <li>
            Regular Audits: Ensuring continuous protection against threats.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">
          Information Sharing & Third Parties
        </h4>
        <p>We do not sell your data. However, we may share it with:</p>
        <ul className="list-items">
          <li>
            Trusted service providers for hosting, payment processing, or
            analytics.
          </li>
          <li>Legal authorities when required by law.</li>
        </ul>
        <h4 className="text-xl font-medium my-2">
          Cookies & Tracking Technologies{" "}
        </h4>
        <p>
          Our website uses cookies to enhance user experience. You can disable
          cookies in your browser settings, but some features may not function
          properly.
        </p>
        <h4 className="text-xl font-medium my-2">Your Rights</h4>
        <p>You can request to:</p>
        <ul className="list-items">
          <li>Access, update, or delete your personal data.</li>
          <li>Opt out of marketing communications.</li>
        </ul>
        <p>
          To exercise your rights, contact us at{" "}
          <Link href="mailto:support@ranavtechnologies.com">
            support@ranavtechnologies.com
          </Link>
          .
        </p>
        <h4 className="text-xl font-medium my-2">Data Retention</h4>
        <p>
          We retain data only as long as necessary for business operations or
          legal compliance.
        </p>
        <h4 className="text-xl font-medium my-2">Third-Party Links</h4>
        <p>
          Our website may contain links to external websites. We are not
          responsible for their privacy practices.
        </p>{" "}
        <h4 className="text-xl font-medium my-2">Changes to This Policy</h4>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices, technology, or legal requirements. We will notify you
          of significant changes by posting the updated policy on our website
          with the revised effective date.
        </p>
        <h4 className="text-xl font-medium my-2">Changes to This Policy</h4>
        <p>
          We may update this policy as needed. Changes will be posted on this
          page, and we encourage regular review.
        </p>
        <h4 className="text-xl font-medium my-2">Contact Us</h4>
        <ul>
          <li>
            📧Email:
            <Link
              href="mailto:support@ranavtechnologies.com"
              className="text-primary"
            >
              support@ranavtechnologies.com
            </Link>
          </li>
          <li>
            📞Phone:
            <Link href="tel:+91 8770736130" className="text-primary">
              +91 8770736130
            </Link>
          </li>
          <li>
            🌐Website:
            <Link
              target="_blank"
              href="http://www.ranavtechnologies.com"
              className="text-primary"
            >
              www.ranavtechnologies.com
            </Link>
          </li>
        </ul>
        This Privacy Policy outlines how Ranav Technologies handles your data
        responsibly. If you have any concerns, feel free to reach out.
      </div>
    </section>
  );
};

export default PrivacyPolicy;
