"use client";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string("Type your email")
    .email("Type avalid email")
    .required("Email is required!"),
  password: Yup.string("Type your password").required("Password is required!"),
});

const AdminLoginForm = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (value, { resetForm }) => {
    const { email, password } = value;

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    console.log(res);
    if (res && !res.error) {
      router.push("/admin/dashboard");
      console.log("correct");
      resetForm();
    } else {
      toast.error("Email or password is not correct...");
    }
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="text-center font-medium text-[32px] leading-[38.4px] md:w-[639px] md:text-[64px] md:leading-[76.8px] lg:leading-[70.4px]">
        Login to admin
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col mx-auto md:w-[480px] gap-[16px] justify-center items-center w-[320px]">
          <Field
            name="email"
            type="email"
            placeholder="Type your email"
            className="border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] w-full outline-none"
          />
          <Field
            name="password"
            type="password"
            placeholder="Type your password"
            className="border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] w-full outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-[15px] py-[11.5px] md:py-[13.5px] px-[103px] bg-[#152F23] font-medium leading-[16.8px] text-[#fff] text-[16px]"
          >
            log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminLoginForm;
