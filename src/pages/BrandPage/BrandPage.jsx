import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

const BrandPage = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="w-full h-96 container mx-auto my-10">
        <ProductCarousel products={products} />
      </div>
      <div className="flex flex-wrap justify-between gap-8 container mx-auto my-10">
        {products?.map((product) => (
          <div className="" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
