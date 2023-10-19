import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

const BrandPage = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="">
      {products.length > 0 ? (
        <div className="">
          <div className="w-full h-[500px] container mx-auto my-10">
            <ProductCarousel products={products} />
          </div>
          <div className="flex flex-wrap justify-around gap-8 container mx-auto my-10">
            {products.map((product) => (
              <div className="" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="container mx-auto my-10 h-[300px] flex justify-center items-center">
          <span className="text-3xl font-bold">
            This brand has no Product :(
          </span>
        </p>
      )}
    </div>
  );
};

export default BrandPage;
