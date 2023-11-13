"use client";
import { updateCategory } from "@/redux/catecory/operetions";
import { selectCategory, selectIsLoading } from "@/redux/catecory/selectors";
import { Form, Formik, Field } from "formik";
import { redirect, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const AdminUpdateCategoryForm = () => {
  const category = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const initialValues = {
    title: category && category.title,
  };

  const onSubmit = (values) => {
    dispatch(updateCategory({ categoryId, ...values }));
    redirect("/admin/categories");
  };

  return (
    <>
      {category && !isLoading && (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="flex flex-col gap-[24px]">
            <Field
              name="title"
              placeholder="Type title category"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />

            <button
              type="submit"
              className="text-[16px] font-medium bg-[#152F23] text-[#fff] p-[11.5px] rounded-[5px] flex items-center justify-center"
            >
              Update category
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default AdminUpdateCategoryForm;
