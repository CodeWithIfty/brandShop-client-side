import { Link, useLoaderData } from "react-router-dom";

const MyCartPage = () => {
  const cartProducts = useLoaderData();
  console.log(cartProducts);
  return (
    <div className="">
      <div className="my-10">
        <h1 className="text-3xl font-bold text-center">My Cart</h1>
      </div>
      <div className="flex my-12 gap-5">
        {cartProducts?.map(
          ({
            _id,
            product_img,
            product_name,
            product_price,
            product_description,
            selectedBrand,
            selectedCategory,
            rating,
          }) => (
            <div key={_id} className="card w-96 bg-base-100 shadow-xl ">
              <figure className="h-72">
                <img src={product_img} alt="Shoes" className="w-full h-72" />
              </figure>
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="card-title text-lg font-bold">
                    {product_name}
                    <div className="badge badge-secondary text-lg">
                      ${product_price}
                    </div>
                  </h2>
                  <h2>
                    <span className="font-bold">Brand: </span> {selectedBrand}
                  </h2>
                  <h2>
                    <span className="font-bold">Category: </span>{" "}
                    {selectedCategory}
                  </h2>
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
                <div className="card-actions justify-center">
                  <Link
                    className="btn bg-success "
                    to={`/product-details/${_id}`}
                  >
                    Details
                  </Link>
                  <button className="btn bg-error text-white">Delete</button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyCartPage;
