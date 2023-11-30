"use client";
import { getUserDetails } from "@/redux/auth/operetions";
import { selectUser } from "@/redux/auth/selectors";
import { data } from "autoprefixer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const UserInfo = () => {
  const session = useSession();

  const initialValues = {
    firstName: session?.data?.user?.name ? session.data.user.name : "",
    lastName: session?.data?.user?.lastName ? session.data.user.lastName : "",
    phone: session?.data?.user?.number ? session.data.user.number : "",
    email: session?.data?.user?.email ? session.data.user.email : "",
  };

  return (
    <Formik initialValues={initialValues} enableReinitialize={true}>
      <Form className="flex flex-col gap-[48px] w-full">
        <div className="flex flex-col gap-[24px] ">
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[16px] font-medium leading-[19.2px]">Name</h3>
            <div className="flex flex-col gap-[16px]">
              <Field
                name="firstName"
                placeholder="First name"
                className="px-[24px] py-[16px] border border-solid border-[#1E1E2D] rounded-[12px] text-[16px] leading-[19.2px] text-[#1E1E2D] outline-none"
              />
              <Field
                name="lastName"
                placeholder="Last name"
                className="px-[24px] py-[16px] border border-solid border-[#1E1E2D] rounded-[12px] text-[16px] leading-[19.2px] text-[#1E1E2D] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[16px] font-medium leading-[19.2px]">Phone</h3>
            <div className="flex flex-col gap-[16px]">
              <div className="relstive">
                <Field
                  name="phone"
                  placeholder="Your phone"
                  className="px-[24px] py-[16px] w-full border border-solid border-[#1E1E2D] rounded-[12px] text-[16px] leading-[19.2px] text-[#1E1E2D] outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[16px] font-medium leading-[19.2px]">Email</h3>
            <div className="flex flex-col gap-[16px]">
              <Field
                name="email"
                placeholder="Your email"
                className="px-[24px] py-[16px] w-full border border-solid border-[#1E1E2D] rounded-[12px] text-[16px] leading-[19.2px] text-[#1E1E2D] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <button
            type="submit"
            className="flex items-center justify-center text-[#fff] text-[16px] leading-[19.2px] bg-[#152F23] rounded-[30px] py-[15px] px-[164.5px]"
          >
            Save changes
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-[16px] leading-[19.2px] border border-solid border-[#000] rounded-[30px] py-[15px] px-[164.5px]"
          >
            Delete account
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserInfo;
