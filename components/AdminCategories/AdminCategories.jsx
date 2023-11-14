"use client";
import { deleteCategory, getAllCategories } from "@/redux/catecory/operetions";
import { selectCategories } from "@/redux/catecory/selectors";
import Link from "next/link";
import { useEffect } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

const AdminCategories = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-medium">Categories</h2>

        <Link
          href="/admin/add-category"
          className="bg-[#152F23] text-[#fff] flex items-center justify-center font-medium rounded-[5px] p-[13.5px]"
        >
          <HiOutlinePlusSm className="w-[18px] h-[18px]" />
        </Link>
      </div>

      <ul>
        {categories?.length > 0 &&
          categories?.map(({ title, _id: id }) => {
            return (
              <li
                className="py-[13px] flex items-center justify-between border-b"
                key={id}
              >
                <h3 className="text-[16px] font-medium">{title}</h3>

                <div className="flex items-center gap-[10px]">
                  <Link href={`/admin/categories/${id}`}>
                    <BsPencil size={18} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => dispatch(deleteCategory(id))}
                  >
                    <AiOutlineDelete size={18} />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AdminCategories;
