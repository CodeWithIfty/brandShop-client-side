import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    product_img,
    product_name,
    product_price,
    selectedBrand,
    selectedCategory,
    rating,
  } = product;

  return (
    <div className="card w-80 bg-base-100 shadow-xl ">
      <figure className="h-44">
        <img src={product_img} alt="Shoes" className="w-full h-44" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-lg font-bold">
          {product_name}
          <div className="badge badge-secondary text-lg">${product_price}</div>
        </h2>
        <h2>
          <span className="font-bold">Brand: </span> {selectedBrand}
        </h2>
        <h2>
          <span className="font-bold">Category: </span> {selectedCategory}
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
        <div className="card-actions justify-center ">
          <Link className="btn bg-success dark-text " to={`/product-details/${_id}`}>
            Details
          </Link>
          <Link
            className="btn bg-primary text-white dark-text"
            to={`/update-product/${_id}`}
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
