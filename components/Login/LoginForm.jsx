"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleLogo from "../../public/images/loging/google-logo.svg";
import Register from "../Register/Register";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const validationSchema = Yup.object({
  email: Yup.string("Type your email")
    .email("Type a valid email")
    .required("Email is required"),
  password: Yup.string("Type your password").required("Password is required"),
});

const LoginForm = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const openRegisterForm = () => {
    setLogin(false);
    setRegister(true);
  };

  const onSubmit = async (values, { resetForm }) => {
    const { email, password } = values;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Something went wrong");
        return;
      }

      router.push("/acount");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <>
      {login && (
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[32px] font-medium leading-[38.4px] mx-auto">
            Log in
          </h1>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-[24px] w-full">
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[10px]">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="px-[24px] py-[14.5px] text-[#B7B7B7] text-[16px] leading-[19.2px] border border-solid border-[#010101] rounded-[30px]"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-400"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="px-[24px] py-[14.5px] text-[#B7B7B7] text-[16px] leading-[19.2px] border border-solid border-[#010101] rounded-[30px]"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-400"
                  />
                </div>
              </div>

              <button
                type="button"
                className="text-[#B7B7B7] text-[16px] ml-auto"
              >
                Forgot Password?
              </button>

              <button
                type="submit"
                className="bg-[#152F23] rounded-[30px] text-[#fff] text-[16px] flex justify-center items-center leading-[19.2px] font-medium py-[14.5px] px-[191.5px]"
              >
                Log in
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
                  Don't have an account?
                </p>
                <button type="button" onClick={openRegisterForm}>
                  Sign Up.
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}

      {register && <Register setRegister={setRegister} setLogin={setLogin} />}
    </>
  );
};

export default LoginForm;
