import Image from "next/image";
import React from "react";
import horizentalArrow from "../../assets/icons/horizental-arrow.png";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    <section className="flex flex-row gap-10 justify-between px-14 py-20 my-16 ml-16 bg-[#01263B] p-10 rounded-l-3xl">
      <div className="w-1/3 relative flex gap-10 flex-col">
        <h3 className="text-7xl text-white font-karla font-light uppercase leading-none">
          Looking for a tech partner?
        </h3>
        <p className="text-3xl text-white font-karla font-light text-justify leading-relaxed">
          Get in touch with us today. Our team is ready to discuss how we can
          support your business with tailored solutions that meet your goals.
        </p>
        <div className="w-full h-full">
          <Image
            src={horizentalArrow}
            alt="Arrow contact us"
            className="absolute left-[-120px]"
          />
        </div>
      </div>
      <div className="bg-white rounded-40 p-10 w-[750px]">
        <form onSubmit={formik.handleSubmit} className="">
          <div className="flex flex-row gap-5 justify-between">
            <div className="flex flex-col mb-3 w-full">
              <label className="text-lg font-karla font-medium mb-1">
                *First Name
              </label>
              <input
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="border border-black rounded-full p-5"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mb-3 w-full">
              <label className="text-lg font-karla font-medium mb-1">
                *Last Name
              </label>
              <input
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="border border-black rounded-full p-5"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-lg font-karla font-medium mb-1">
              *Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border border-black rounded-full p-5"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="flex flex-col mb-2">
            {/* <label className="text-lg font-karla font-medium">Message</label> */}
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="border border-black rounded-40 p-5"
              rows={5}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-xs">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-secondary text-3xl uppercase leading-none text-white p-2 mt-4 w-full rounded-full py-5 hover:bg-primary-dark font-karla"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
