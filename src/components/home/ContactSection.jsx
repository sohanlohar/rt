import Image from "next/image";
import React from "react";
import horizentalArrow from "../../assets/icons/horizental-arrow.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactForm from "../forms/ContactForm";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters long")
    .required("Message is required"),
});

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Form submitted successfully!");
    },
  });

  return (
    <section className="relative">
      <div className="container flex flex-col md:flex-row gap-10 justify-between pl-0 md:pl-14 py-10 md:py-20 my-16 sm:flex-row">
        <div className="w-full md:w-1/3 relative flex gap-10 flex-col">
          <h3 className="text-3xl md:text-6xl text-white font-karla font-normal uppercase leading-none">
            Looking <br />for a tech partner?
          </h3>
          <p className="text-3xl text-white font-karla font-light text-justify leading-snug hidden md:block">
            Get in touch with us today. Our team is ready to discuss how we can
            support your business with tailored solutions that meet your goals.
          </p>
          <div className="w-full h-full hidden md:block">
            <Image
              src={horizentalArrow}
              alt="Arrow contact us"
              className="absolute left-[-120px]"
            />
          </div>
        </div>
        <div className="bg-white rounded-40 px-5 md:px-10 py-8 md:py-10 w-full md:w-[750px]">
          <ContactForm />
        </div>
        <p className="text-base text-white font-karla font-light text-justify leading-5 block md:hidden">
          Get in touch with us today. Our team is ready to discuss how we can
          support your business with tailored solutions that meet your goals.
        </p>
      </div>
      <div className="bg-[#01263B] absolute left-0 top-0 w-full h-full -z-10 ml-0 sm:ml-16 rounded-l-3xl"></div>
    </section>
  );
};

export default ContactSection;
