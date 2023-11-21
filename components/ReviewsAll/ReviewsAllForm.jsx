"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReviewsAllFormTitle from "./ReviewsAllFormTitle";
import Section from "../Section";
import ReactStars from "react-rating-stars-component";

const validationSchema = Yup.object({
  name: Yup.string("Type your name").required("Name is required!"),
  message: Yup.string("Type a message").required("Message is required!"),
});

const ReviewsAllForm = ({ title, subtitle }) => {
  const initialValues = {
    name: "",
    message: "",
  };

  const onSubmit = (values, { resetForm }) => {};

  return (
    <Section anotherStyles={"bg-[#F6F6F6]"}>
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
            <ReviewsAllFormTitle title={title} subtitle={subtitle} />

            <div className="flex flex-col gap-[16px] md:gap-[32px]">
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col gap-[10px]">
                  <Field
                    name="name"
                    placeholder="First name"
                    type="text"
                    className="bg-[#fff] border border-solid border-[#010101] rounded-[8px] text-[#B7B7B7] text-[14px] leading-[16.8px] py-[16px] px-[20px] lg:py-[18.5px] outline-none md:text-[18px] md:leading-[21.6px]"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-400"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Your review"
                    className="bg-[#fff] border border-solid border-[#010101] rounded-[8px] text-[#B7B7B7] text-[14px] leading-[16.8px] py-[16px] px-[20px] lg:py-[18.5px] resize-none h-[211px] outline-none md:text-[18px] md:leading-[21.6px] md:px-[20px]"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[12px]">
                  <p className="2-[257px] leading-[16.8px]">
                    How would you rate your experience with Tasty Go?
                  </p>
                  <ReactStars count={5} activeColor="#536524" edit={true} />
                </div>

                <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
                  <button
                    type="button"
                    className="py-[11.5px] px-[132.5px] md:py-[14px] md:px-[151.5px] md:text-[16px] md:leading-[19.2px] lg:px-[123.5px] lg:py-[20.5px] border border-solid border-[#010101] font-medium rounded-[30px] leading-[16.8px] flex justify-center items-center"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="py-[11.5px] px-[132.5px] md:py-[14px] md:px-[151.5px] md:text-[16px] md:leading-[19.2px] lg:px-[123.5px] lg:py-[20.5px] bg-[#152F23] font-medium text-[#fff] rounded-[30px] leading-[16.8px] flex justify-center items-center"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Section>
  );
};

export default ReviewsAllForm;
