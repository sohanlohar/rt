import React from "react";
import servicesBg from "../assets/images/services-bg.png";
import Link from "next/link";

const TermsAndConditions = () => {
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
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold">Terms and Conditions</h2>
        <h3 className="text-base font-medium">Effective Date: 05-Mar-2025 </h3>
      </div>
      <div>
        <p className="mb-5">
          {" "}
          Welcome to Ranav Technologies (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) These Terms and Conditions govern your use of our
          website and services. By accessing or using our website, you agree to
          comply with and be bound by these terms. If you do not agree, please
          refrain from using our services.
        </p>
        <h4 className="text-xl font-medium my-2">Acceptance of Terms</h4>
        <ul>
          <li>
            By accessing or using our website, you confirm that you are at least
            18 years old and have the legal authority to agree to these terms.
          </li>
          <li>
            Your continued use of our services constitutes acceptance of any
            modifications to these terms.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Use of Services</h4>
        <ul>
          <li>
            You agree to use our services only for lawful purposes and in
            compliance with all applicable laws and regulations.
          </li>
          <li>
            You may not misuse our website or services, including attempting
            unauthorized access, distributing malware, or engaging in fraudulent
            activities.
          </li>
          <li>
            We reserve the right to restrict, suspend, or terminate your access
            if we suspect misuse.
          </li>
        </ul>{" "}
        <h4 className="text-xl font-medium my-2">
          Intellectual Property Rights
        </h4>
        <ul>
          <li>
            All content on this website, including text, images, logos, and
            software, is the property of Ranav Technologies and is protected by
            copyright, trademark, and intellectual property laws.
          </li>
          <li>
            You may not copy, reproduce, modify, distribute, or exploit any
            content without our prior written consent.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">User Responsibilities</h4>
        <p>You agree not to:</p>
        <ul>
          <li>Submit false or misleading information.</li>
          <li>Infringe on any intellectual property rights.</li>
          <li>
            Upload or distribute harmful software, spam, or any unlawful
            content.
          </li>
          <li>
            Attempt to interfere with the proper functioning of our services.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Payments and Refund Policy</h4>
        <ul>
          <li>
            If our services involve payments, you agree to provide accurate
            billing information.
          </li>
          <li>
            Payments are non-refundable unless explicitly stated otherwise.
          </li>
          <li>
            We reserve the right to change pricing and payment terms at any
            time.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Disclaimer of Warranties</h4>
        <ul>
          <li>
            Our services are provided &quot;as is&quot; and &quot;as
            available&quot; without any warranties, express or implied.
          </li>
          <li>
            We do not guarantee uninterrupted access, error-free operation, or
            absolute security.
          </li>
          <li>
            We are not responsible for any damages resulting from the use or
            inability to use our services.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Limitation of Liability</h4>
        <ul>
          <li>
            To the maximum extent permitted by law, Ranav Technologies is not
            liable for any indirect, incidental, or consequential damages
            arising from your use of our services.
          </li>
          <li>
            Our liability, if any, shall not exceed the amount you paid for our
            services.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Termination of Services</h4>
        <ul>
          <li>
            We may suspend or terminate your access to our services at any time,
            with or without notice, if you violate these terms.
          </li>
          <li>
            You may stop using our services at any time without prior notice.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">
          Third-Party Links and Services
        </h4>
        <ul>
          <li>
            Our website may contain links to third-party websites. We do not
            endorse or take responsibility for any third-party content or
            policies.
          </li>
          <li>You access third-party services at your own risk.</li>
        </ul>
        <h4 className="text-xl font-medium my-2">Updates to These Terms</h4>
        <ul>
          <li>
            We may update these Terms and Conditions at any time. Any changes
            will be posted on this page with a revised effective date.
          </li>
        </ul>
        <h4 className="text-xl font-medium my-2">Contact Information</h4>
        <p>
          {" "}
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>{" "}
        Ranav Technologies{" "}
        <Link
          href="mailto:support@ranavtechnologies.com"
          className="text-primary"
        >
          support@ranavtechnologies.com
        </Link>{" "}
        Vijay Nagar Indore, By using our website and services, you acknowledge
        that you have read, understood, and agreed to these Terms and
        Conditions.
      </div>
    </section>
  );
};

export default TermsAndConditions;
