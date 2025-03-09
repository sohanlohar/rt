import { useState } from "react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide a wide range of services, including [dummy content]. Our team specializes in delivering high-quality solutions tailored to your needs.",
  },
  {
    question: "How do you ensure the quality and reliability of your projects?",
    answer:
      "Quality and reliability are our top priorities. We follow industry best practices, conduct rigorous testing, and implement [dummy content] to ensure optimal performance.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on complexity and requirements. On average, it takes [dummy content] weeks to complete, but we offer flexible timelines based on client needs.",
  },
  {
    question: "Can you develop responsive and mobile-first websites?",
    answer:
      "Yes, we ensure that all our websites are fully responsive and mobile-friendly. We use [dummy content] to optimize the user experience across different devices.",
  },
  {
    question: "How involved will I be during the development process?",
    answer:
      "We value client collaboration. You’ll have regular updates, feedback sessions, and [dummy content] to ensure your vision is met throughout the development process.",
  },
  {
    question:
      "What front-end frameworks do you use, and how do you choose one for a project?",
    answer:
      "We use frameworks like [dummy content] based on project requirements, scalability, and performance needs. Our team carefully evaluates the best fit for each project.",
  },
  {
    question: "How do you handle security in your projects?",
    answer:
      "Security is a top priority. We implement [dummy content], follow industry standards, and conduct regular audits to protect data and ensure compliance.",
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
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col justify-between py-10 pl-4">
          <h3 className="text-6xl font-archivo font-bold text-primary">
            Frequently Asked Questions
          </h3>
        </div>
        <div class="col-span-2 rounded-40 px-8 py-12">
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
                className="w-full flex justify-between items-center p-4 text-left font-medium text-lg bg-gray-100 hover:bg-gray-200"
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
