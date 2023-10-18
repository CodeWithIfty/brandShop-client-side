import { useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
  const product = useLoaderData();
  const {
    _id,
    product_img,
    product_name,
    product_price,
    product_description,
    selectedBrand,
    selectedCategory,
    rating,
  } = product;
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product_img}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 mx-auto px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product_name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product_description.substring(0, 150)}...
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${product_price}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Rating:
              </span>
              <div className="rating my-2">
                <span className="font-bold mr-1">Rating: </span>
                {Array.from({ length: rating }, (_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name={`rating-${product_name}`}
                    className="mask mask-star-2 bg-orange-400 checked"
                    readOnly
                  />
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
