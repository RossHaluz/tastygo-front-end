"use client";
import { getCategory } from "@/redux/catecory/operetions";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminUpdateCategoryForm from "./AdminUpdateCategoryForm";

const AdminUpdateCategory = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getCategory(categoryId));
  }, [dispatch]);

  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <h2 className="text-[18px] leading-[19.8px] font-medium">
        Update category
      </h2>
      <AdminUpdateCategoryForm />
    </div>
  );
};

export default AdminUpdateCategory;
