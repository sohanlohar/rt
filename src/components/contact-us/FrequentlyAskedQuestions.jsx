import { useState } from "react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "At Ranav Technologies, we specialize in IT services, including custom software development, web and mobile application development, UI/UX design, digital transformation consulting, and IT support. Our team works closely with clients to deliver high-quality, scalable, and innovative solutions tailored to their business needs.",
  },
  {
    question: "How do you ensure the quality and reliability of your projects?",
    answer:
      "Quality is our top priority. We follow industry best practices, conduct rigorous testing, and implement agile development methodologies to ensure the reliability and performance of our projects. Our QA team performs multiple testing phases, including functional, usability, and security testing, to deliver error-free and high-performing applications.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project depends on its complexity, features, and specific requirements. A simple website may take a few weeks, while a custom enterprise application can take several months. We provide a detailed project roadmap and regular updates to ensure transparency and on-time delivery.",
  },
  {
    question: "Can you develop responsive and mobile-first websites?",
    answer:
      "Yes, we build fully responsive and mobile-first websites to ensure seamless user experience across all devices. Our team uses modern frameworks like Bootstrap, Tailwind CSS, and media queries to ensure that websites look and perform optimally on smartphones, tablets, and desktops.",
  },
  {
    question: "How involved will I be during the development process?",
    answer:
      "We encourage client involvement throughout the development process. From the initial consultation and requirement gathering to UI/UX design, development, and testing, we keep you informed and seek your feedback to ensure the final product aligns with your vision and business goals.",
  },
  {
    question:
      "What front-end frameworks do you use, and how do you choose one for a project?",
    answer:
      "We use a variety of front-end frameworks, including React.js, Angular, and Vue.js, based on the project’s requirements, scalability needs, and performance considerations. Our team evaluates factors such as application complexity, interactivity, and future scalability before selecting the most suitable framework.",
  },
  {
    question: "How is pricing determined for a project?",
    answer:
      "Pricing depends on various factors such as project complexity, features, development time, and required technologies. We offer flexible pricing models, including fixed-price, hourly, and milestone-based payments, to cater to different business needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods, including bank transfers, credit/debit cards, PayPal, and other digital payment options. We ensure secure transactions and provide detailed invoices for transparency.",
  },
  {
    question: "How do you handle security in your projects?",
    answer:
      "Security is a fundamental part of our development process. We follow best security practices, including data encryption, secure authentication methods, firewall protection, and regular security audits. Our team ensures that all applications comply with industry security standards to protect user data and prevent cyber threats.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container">
      <div className="grid"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between py-10 pl-4">
          <h3 className="text-3xl md:text-6xl font-archivo font-bold text-primary">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="col-span-2 rounded-40 px-0 md:px-8 pt-0 md:py-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative bg-[#e2e2e2] rounded-[14px] border border-gray-200 backdrop-blur-md overflow-hidden"
              style={{
                borderImageSource:
                  "linear-gradient(127deg, rgba(59, 90, 255, 0.44) -49.52%, rgba(71, 28, 245, 0) 71.47%)",
                borderImageSlice: 1,
                backdropFilter: "blur(10px)",
                marginBottom: "15px",
              }}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-sm md:text-lg bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border-t text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
