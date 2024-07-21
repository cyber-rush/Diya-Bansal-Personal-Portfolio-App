"use client";
import React from "react";
import "./contact-section.css";
import { Formik } from "formik";
import { initialValues } from "./contact-section-data";
import { contactFormOnSubmit } from "./contact-form-function";

const ContactSection = () => {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={contactFormOnSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ContactSection;
