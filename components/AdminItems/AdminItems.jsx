import Link from "next/link";
import { HiOutlinePlusSm } from "react-icons/hi";
import AdminItemsList from "./AdminItemsList";

const AdminItems = () => {
  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-medium">Items</h2>
        <Link
          href="/admin/add-item"
          className="bg-[#152F23] text-[#fff] flex items-center justify-center font-medium rounded-[5px] p-[13.5px]"
        >
          <HiOutlinePlusSm className="w-[18px] h-[18px]" />
        </Link>
      </div>
      <AdminItemsList />
    </div>
  );
};

export default AdminItems;
