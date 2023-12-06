"use client";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const UserInfo = ({ selectFile }) => {
  const { data: session, update } = useSession();

  const initialValues = {
    name: session?.user?.name ? session.user.name : "",
    lastName: session?.user?.lastName ? session.user.lastName : "",
    number: session?.user?.number ? session.user.number : "",
    email: session?.user?.email ? session.user.email : "",
  };

  const onSubmit = async (values) => {
    const { name, lastName, number, email } = values;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("number", number);
    formData.append("email", email);

    if (selectFile) {
      formData.append("image", selectFile[0]);
    }

    const uploadUser = await axios.put(
      `https://tastygo.onrender.com/api/user/update-user/${session?.user?.id}`,
      formData
    );

    if (uploadUser.status === 200) {
      toast.success("User success update!");

      await update({
        ...session,
        user: {
          ...session?.user,
          ...uploadUser.data,
        },
      });
    } else {
      toast.error("Somethig is wrong...");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col gap-[48px] w-full">
        <div className="flex flex-col gap-[24px] ">
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[16px] font-medium leading-[19.2px]">Name</h3>
            <div className="flex flex-col gap-[16px]">
              <Field
                name="name"
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
                  name="number"
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
