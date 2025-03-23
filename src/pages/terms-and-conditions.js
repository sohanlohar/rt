import React from "react";
import servicesBg from "../assets/images/services-bg.png";
import Link from "next/link";

const TermsAndConditions = () => {
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
          Welcome to <b>Ranav Technologies</b>. By accessing or using our
          website and services, you agree to comply with and be bound by the
          following Terms & Conditions. Please read these terms carefully before
          using our website or services.
        </p>
        <h4 className="text-xl font-medium my-2">Acceptance of Terms</h4>
        <p>
          By accessing or using the website and services of{" "}
          <b>Ranav Technologies</b>, you agree to abide by these Terms &
          Conditions and any applicable laws or regulations. If you do not agree
          to these terms, please refrain from using our website and services.
        </p>
        <h4 className="text-xl font-medium my-2">Our Services</h4>
        <p>
          <b>Ranav Technologies</b> provides a wide range of digital services,
          including but not limited to UX/UI design, mobile app development,
          software development, website development, and digital strategy.
          Specific terms for each service may be provided in individual
          contracts and agreements.
        </p>
        <h4 className="text-xl font-medium my-2">User Responsibilities</h4>
        <ul className="list-items">
          <li>
            Account Information: You are responsible for maintaining the
            confidentiality of your account information and any passwords or
            credentials provided by us
          </li>
          <li>
            Content Submission: You are solely responsible for any content you
            submit or share through our website or services. By submitting
            content, you guarantee that you own the rights to it and that it
            does not violate any laws or third-party rights.
          </li>
        </ul>{" "}
        <h4 className="text-xl font-medium my-2">
          Intellectual Property Rights
        </h4>
        <p>
          All content, designs, and intellectual property related to{" "}
          <b>Ranav Technologies</b>(including logos, trademarks, and service
          marks) are owned by <b>Ranav Technologies</b> or our licensors. You
          may not use, reproduce, or distribute any materials from the website
          or our services without prior written permission.
        </p>
        <h4 className="text-xl font-medium my-2">Payment Terms</h4>
        <p>
          Payment for services will be specified in the individual service
          agreements. Payments must be made according to the payment terms
          outlined in the contract. Failure to make timely payments may result
          in delays or suspension of services.
        </p>
        <h4 className="text-xl font-medium my-2">Confidentiality</h4>
        <p>
          We are committed to maintaining the confidentiality of your
          information. Both parties agree to keep any sensitive or proprietary
          information shared during the course of our relationship confidential,
          unless required by law or for the fulfillment of the services.
        </p>
        <h4 className="text-xl font-medium my-2">Limitation of Liability</h4>
        <p>
          <b>Ranav Technologies</b> will not be held liable for any damages,
          losses, or expenses incurred as a result of using our services,
          including but not limited to indirect, incidental, or consequential
          damages. While we strive to provide quality services, we do not
          guarantee specific outcomes.
        </p>
        <h4 className="text-xl font-medium my-2">Termination of Services</h4>
        <p>
          <b>Ranav Technologies</b> reserves the right to suspend or terminate
          access to our services if you violate these Terms & Conditions or
          engage in unlawful activities. Termination may happen without prior
          notice, and any payments made may not be refunded in such cases.
        </p>
        <h4 className="text-xl font-medium my-2">
          Changes to Terms & Conditions
        </h4>
        <p>
          We may update these Terms & Conditions from time to time. Any changes
          will be posted on this page, and the “Effective Date” will be revised
          accordingly. We encourage you to review this page periodically to stay
          informed of any updates.
        </p>
        <h4 className="text-xl font-medium my-2">Governing Law</h4>
        <p>
          These Terms & Conditions shall be governed by the laws of MP,India.
          Any disputes arising from these terms will be resolved in the
          appropriate courts of Indore.
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
      </div>
    </section>
  );
};

export default TermsAndConditions;
