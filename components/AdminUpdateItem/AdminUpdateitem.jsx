"use client";
import { selectIsLoading, selectItemDetails } from "@/redux/item/selectors";
import AdminUpdateItemForm from "./AdminUpdateItemForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getItemDetails } from "@/redux/item/operetions";
import { selectCategories } from "@/redux/catecory/selectors";
import { getAllCategories } from "@/redux/catecory/operetions";

const AdminUpdateitem = () => {
  const item = useSelector(selectItemDetails);
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getItemDetails(itemId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <h2 className="text-[16px] font-medium">Update item</h2>
      {item && categories && !isLoading && (
        <AdminUpdateItemForm item={item} categories={categories} />
      )}
    </div>
  );
};

export default AdminUpdateitem;
