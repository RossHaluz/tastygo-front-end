"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  nameItem: Yup.string("Type name item").required("Name is required"),
});

const AdminAddItemForm = () => {
  const initialValues = {
    nameItem: "",
  };

  const onSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-[16px] w-full">
        <label className="flex flex-col gap-[16px] text-[16px] font-medium">
          Name item
          <div className="flex flex-col gap-[10px]">
            <Field
              name="nameItem"
              type="text"
              placeholder="Type name item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />
            <ErrorMessage
              name="nameItem"
              component="p"
              className="text-red-400 font-normal"
            />
          </div>
        </label>
      </Form>
    </Formik>
  );
};

export default AdminAddItemForm;
