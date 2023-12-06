"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleLogo from "../../public/images/loging/google-logo.svg";
import UrkFlag from "../../public/images/number/ukr.svg";
import { registerUser } from "@/redux/auth/operetions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string("Type your name").required("Name is required"),
  number: Yup.string("Type your number").required("Number is required"),
  email: Yup.string("Type your email").required("Email is required"),
  password: Yup.string("Type your password").required("Password is required"),
});

const RegisterForm = ({ setRegister, setLogin }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
    email: "",
    password: "",
  };

  const openLoginForm = () => {
    setLogin(true);
    setRegister(false);
  };

  const onSubmit = async (values) => {
    try {
      const registerUser = await axios.post(
        "http://localhost:3005/api/user/register",
        values
      );
      console.log(registerUser);

      if (!registerUser) {
        await setLogin(true);
        await setRegister(false);
      }
      toast.success("Registration successful");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex flex-col gap-[24px] w-full">
      <h2 className="text-[32px] font-medium leading-[38.4px] mx-auto">
        Sign Up
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <Field
                name="name"
                placeholder="First Name"
                className="px-[24px] py-[14.5px] text-[#B7B7B7] text-[16px] outline-none leading-[19.2px] border border-solid border-[#010101] rounded-[30px]"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-400"
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="w-full relative">
                <UrkFlag className="absolute top-1/2 left-[20px] -translate-y-1/2" />
                <Field
                  name="number"
                  type="tel"
                  placeholder="+380  00 000 00 00"
                  className="pr-[24px] pl-[58px] py-[14.5px] text-[#B7B7B7] w-full text-[16px] outline-none leading-[19.2px] border border-solid border-[#010101] rounded-[30px]"
                />
              </div>

              <ErrorMessage
                name="number"
                component="p"
                className="text-red-400"
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <Field
                name="email"
                placeholder="Email"
                className="px-[24px] py-[14.5px] text-[#B7B7B7] text-[16px] outline-none leading-[19.2px] border border-solid border-[#010101] rounded-[30px]"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-400"
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="w-full">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="px-[24px] py-[14.5px] text-[#B7B7B7] w-full text-[16px] outline-none leading-[19.2px] border border-solid border-[#010101] rounded-[30px]"
                />
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#152F23] rounded-[30px] text-[#fff] text-[16px] flex justify-center items-center leading-[19.2px] font-medium py-[14.5px] px-[191.5px]"
          >
            Register
          </button>

          <h3 className="text-center text-[16px]">or Sign in via</h3>

          <button
            type="button"
            className="flex items-center gap-[8px] py-[12px] px-[56.5px] border border-solid border-[#010101] rounded-[30px] w-[207px] mx-auto justify-center"
          >
            <GoogleLogo className="w-[24px] h-[24px]" />
            Google
          </button>

          <div className="flex items-center gap-[5px] mx-auto">
            <p className="text-center text-[16px]">
              Don&rsquo;t have an account?
            </p>
            <button type="button" onClick={openLoginForm}>
              Sign in.
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
