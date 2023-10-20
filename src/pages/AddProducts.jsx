import AddProductsForm from "../components/AddProductsForm";

const AddProducts = () => {
  return (
    <div className="border-t-2">
      <div className="my-10 text-center">
        <h1 className="text-3xl font-bold">Add Products</h1>
      </div>
      <AddProductsForm />
    </div>
  );
};

export default AddProducts;
