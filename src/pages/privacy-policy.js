import React from "react";
import servicesBg from "../assets/images/services-bg.png";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="container">
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
          {" "}
          Ranav Technologies (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) is committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and protect your information when
          you use our website and services. By using our website and services,
          you consent to the collection and use of your information in
          accordance with this Privacy Policy.
        </p>
        <h4 className="text-xl font-medium my-2">Information We Collect</h4>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            Personal Information: Name, email address, phone number, and other
            contact details when you interact with us.
          </li>
          <li>
            Usage Data: Information about how you interact with our website,
            including IP address, browser type, and pages visited.
          </li>
          <li>
            Cookies and Tracking Technologies: To enhance user experience and
            analyze website performance.
          </li>
          <li>
            Payment Information: If you make a purchase, we may collect billing
            details and transaction information.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">How We Use Your Information </h4>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To personalize user experience and offer relevant content.</li>
          <li>
            To communicate with you regarding updates, promotions, and customer
            support.
          </li>
          <li>
            To analyze website performance and user behavior to enhance
            functionality.
          </li>
          <li>To detect and prevent fraudulent or unauthorized activities.</li>
          <li>To comply with legal obligations and enforce our policies.</li>
        </ul>{" "}
        <h4 className="text-xl font-medium my-2">Sharing of Information</h4>
        <p>
          We do not sell or rent your personal information. However, we may
          share your information with:
        </p>
        <ul>
          <li>
            Service Providers: Third-party vendors who assist in providing our
            services, including hosting, analytics, payment processing, and
            customer support.
          </li>
          <li>
            Legal Compliance: If required by law, regulation, or legal process,
            or to protect our rights, property, and safety.{" "}
          </li>
          <li>
            Business Transfers: In case of a merger, acquisition, or sale of
            assets, your information may be transferred to the new entity.{" "}
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Data Security</h4>
        <p>
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, or disclosure. However, no
          method of transmission over the internet or electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
        <h4 className="text-xl font-medium my-2">Your Rights</h4>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of marketing communications and promotional emails.</li>
          <li>
            Request data portability to receive a copy of your data in a
            structured format.
          </li>
          <li>Withdraw consent for data processing where applicable.</li>
        </ul>
        <h4 className="text-xl font-medium my-2">Third-Party Links</h4>
        <p>
          {" "}
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices or content. We encourage you
          to review their privacy policies before providing any personal
          information.
        </p>
        <h4 className="text-xl font-medium my-2">Children&apos;s Privacy</h4>
        <p>
          {" "}
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from children. If we become
          aware of such data collection, we will take appropriate steps to
          delete the information.
        </p>{" "}
        <h4 className="text-xl font-medium my-2">Changes to This Policy</h4>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices, technology, or legal requirements. We will notify you
          of significant changes by posting the updated policy on our website
          with the revised effective date.
        </p>
        <h4 className="text-xl font-medium my-2">Contact Us</h4>
        <p>
          {" "}
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>{" "}
        Ranav Technologies{" "}
        <Link href="mailto:support@ranavtechnologies.com" className="text-primary">
          support@ranavtechnologies.com
        </Link>{" "}
        Vijay Nagar Indore By using our website and services, you agree to this
        Privacy Policy. If you do not agree, please discontinue use of our
        services.
      </div>
    </section>
  );
};

export default PrivacyPolicy;
