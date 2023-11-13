import AdminAddCategoryForm from "./AdminAddCategoryForm";

const AdminAddCategory = () => {
  return (
    <div className="container py-[24px] flex flex-col gap-[24px]">
      <h2 className="text-[18px] leading-[19.8px] font-medium">Add category</h2>
      <AdminAddCategoryForm />
    </div>
  );
};

export default AdminAddCategory;
