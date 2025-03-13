import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

const ContactForm = ({ requestQuote }) => {
  const [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("Sending...");

      try {
        const response = await axios.post("/api/sendEmail", values);

        if (response.data.success) {
          setStatus("Email sent successfully!");
          resetForm();
        } else {
          setStatus("Failed to send email.");
        }
      } catch (error) {
        console.error(error);
        setStatus("An error occurred while sending the email.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="">
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
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-xs">
              {formik.errors.firstName}
            </div>
          )}
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
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
          )}
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
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        )}
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
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-xs">{formik.errors.message}</div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <button
          type="submit"
          className="bg-secondary text-2xl md:text-3xl uppercase leading-none text-white p-1 md:p-2 mt-4 w-full rounded-full py-3 md:py-5 hover:bg-primary-dark font-karla"
        >
          Submit
        </button>
        {requestQuote && (
          <button
            type="submit"
            className="bg-secondary text-2xl md:text-3xl uppercase leading-none text-white p-1 md:p-2 mt-4 w-full rounded-full py-3 md:py-5 hover:bg-primary-dark font-karla"
          >
            Request a quote
          </button>
        )}
      </div>

      <p className="mt-3 text-sm">{status}</p>
    </form>
  );
};

export default ContactForm;
