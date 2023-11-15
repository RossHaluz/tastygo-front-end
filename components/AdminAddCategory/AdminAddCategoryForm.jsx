"use client";
import { createCategory } from "@/redux/catecory/operetions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { redirect, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string("Type title category").required("Title is required!"),
});

const AdminAddCategoryForm = () => {
  const dispatch = useDispatch();
  const redirect = useRouter();

  const initialValues = {
    title: "",
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(createCategory(values));
    redirect.push("/admin/categories");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Field
            name="title"
            placeholder="Type title category"
            className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
          />
          <ErrorMessage
            name="title"
            component="p"
            className="text-[16px] font-medium text-red-400"
          />
        </div>

        <button
          type="submit"
          className="text-[16px] font-medium bg-[#152F23] text-[#fff] p-[11.5px] rounded-[5px] flex items-center justify-center"
        >
          Create category
        </button>
      </Form>
    </Formik>
  );
};

export default AdminAddCategoryForm;
