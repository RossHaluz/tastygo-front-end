"use client";
import { deleteItem, getAllItems } from "@/redux/item/operetions";
import { selectIsLoading, selectItems } from "@/redux/item/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const AdminItemsList = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  console.log(isLoading);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <table className="border-collapse w-full ">
      <thead>
        <tr>
          <th className="border border-solid border-[#343a40] p-[10px]">
            Info
          </th>
          <th className="border border-solid border-[#343a40] p-[10px]">
            Price
          </th>
          <th className="border border-solid border-[#343a40] p-[10px]">
            Edit/Delete
          </th>
        </tr>
      </thead>

      <tbody>
        {items?.map(({ image, nameItem, _id: id, price }) => {
          return (
            <tr key={id}>
              <td className="flex items-center gap-[10px] border border-solid border-[#343a40] p-[10px]">
                <div className="flex items-center gap-[5px]">
                  <img
                    src={image}
                    alt={nameItem}
                    className="w-[55px] h-[40px]"
                  />
                  <h3>{nameItem}</h3>
                </div>
              </td>
              <td className="border border-solid border-[#343a40] p-[10px]">
                {price}
              </td>
              <td className="border border-solid border-[#343a40] p-[10px]">
                <div className="flex items-center justify-center gap-[15px]">
                  <Link href={`/admin/items/${id}`}>
                    <BsPencil size={24} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteItem(id))}
                  >
                    <RiDeleteBinLine size={24} />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminItemsList;
