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

const ContactServices = () => {
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
      <div className="container flex flex-col md:flex-row gap-10 justify-between pr-0 sm:pr-8 md:pr-14 py-10 md:py-20 my-16 sm:flex-row">
        <div className="w-full md:w-1/3 relative flex gap-10 flex-col">
          <h3 className="text-3xl md:text-6xl text-white font-karla font-normal uppercase leading-none">
            Get Your Custom Quote
          </h3>
          <p className="text-3xl text-white font-karla font-light text-justify leading-normal hidden md:block">
            Tell us what you’re looking for, and we’ll craft a tailored solution
            just for you. Our team is ready to dive into your project needs,
            budget, and timeline to bring your vision to life. Fill out the
            form, and let’s make it happen together!
          </p>
          {/* <div className="w-full h-full hidden md:block">
            <Image
              src={horizentalArrow}
              alt="Arrow contact us"
              className="absolute left-[-120px]"
            />
          </div> */}
        </div>
        <div className="bg-white rounded-40 px-5 md:px-10 py-8 md:py-10 w-full md:w-[750px]">
          {/* <form onSubmit={formik.handleSubmit} className="">
            <div className="flex flex-col md:flex-row gap-0 md:gap-5 justify-between">
              <div className="flex flex-col mb-3 w-full">
                <label
                  htmlFor="firstName"
                  className="text-sm md:text-lg font-karla font-medium mb-1"
                >
                  *First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="border border-black rounded-full p-2 md:p-3"
                  placeholder="Enter First Name"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label
                  htmlFor="lastName"
                  className="text-sm md:text-lg font-karla font-medium mb-1"
                >
                  *Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="border border-black rounded-full p-2 md:p-3"
                  placeholder="Enter Last Name"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="text-sm md:text-lg font-karla font-medium mb-1"
              >
                *Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border border-black rounded-full p-2 md:p-3"
                placeholder="Enter Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-2">
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="border border-black rounded-30 p-5"
                rows={5}
                placeholder="Enter Message"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="bg-secondary text-2xl md:text-3xl uppercase leading-none text-white p-1 md:p-2 mt-4 w-full rounded-full py-3 md:py-5 hover:bg-primary-dark font-karla"
            >
              Submit
            </button>
          </form> */}
          <ContactForm />
        </div>
        <p className="text-base text-white font-karla font-light text-justify leading-5 block md:hidden">
          Tell us what you’re looking for, and we’ll craft a tailored solution
          just for you. Our team is ready to dive into your project needs,
          budget, and timeline to bring your vision to life. Fill out the form,
          and let’s make it happen together!
        </p>
      </div>
      <div className="bg-[#014D57] absolute right-0 top-0 w-full h-full -z-10 mr-0 md:mr-16 rounded-r-3xl"></div>
    </section>
  );
};

export default ContactServices;
