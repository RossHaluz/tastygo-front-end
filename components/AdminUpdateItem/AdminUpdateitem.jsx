import AdminUpdateItemForm from "./AdminUpdateItemForm";

const AdminUpdateitem = () => {
  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <h2 className="text-[16px] font-medium">Update item</h2>
      <AdminUpdateItemForm />
    </div>
  );
};

export default AdminUpdateitem;
