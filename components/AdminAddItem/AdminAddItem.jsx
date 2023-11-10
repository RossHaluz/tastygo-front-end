import AdminAddItemForm from "./AdminAddItemForm";

const AdminAddItem = () => {
  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <h2 className="text-[18px] leading-[19.8px] font-medium">Add item</h2>
      <AdminAddItemForm />
    </div>
  );
};

export default AdminAddItem;
