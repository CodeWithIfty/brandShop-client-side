import { useCallback, useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../context/AuthProvider";

const MyCartPage = () => {
  const cartProducts = useLoaderData();
  // console.log(cartProducts);
  const [newProduct, setNewProduct] = useState([]);

  const handleDeleteProduct = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Do you really want to delete this Product?",
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cart-products-delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const afterDeletedProduct = cartProducts.filter(
              (product) => product._id !== _id
            );
            setNewProduct(afterDeletedProduct);
            Swal.fire("Deleted!", "", "success");
          })
          .catch(() => {
            Swal.fire("Error deleting product", "", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="my-10">
          <h1 className="text-3xl font-bold text-center">My Cart</h1>
        </div>
        {cartProducts.length > 0  ? (
          <div className="flex flex-wrap justify-center my-12 gap-10">
            {(newProduct.length > 0 ? newProduct : cartProducts).map(
              (product) => (
                <div
                  key={product._id}
                  className="card w-96 bg-base-100 shadow-xl "
                >
                  <figure className="h-72">
                    <img
                      src={product.product.product_img}
                      alt="Shoes"
                      className="w-full h-72"
                    />
                  </figure>
                  <div className="p-4 h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <h2 className="card-title text-lg font-bold">
                        {product.product.product_name}
                        <div className="badge badge-secondary text-lg">
                          ${product.product.product_price}
                        </div>
                      </h2>
                      <h2>
                        <span className="font-bold">Brand: </span>{" "}
                        {product.product.selectedBrand}
                      </h2>
                      <h2>
                        <span className="font-bold">Category: </span>{" "}
                        {product.product.selectedCategory}
                      </h2>
                      <div className="rating my-2">
                        <span className="font-bold mr-1">Rating: </span>
                        {Array.from(
                          { length: product.product.rating },
                          (_, index) => (
                            <input
                              key={index}
                              type="radio"
                              name={`rating-${product.product.product_name}`}
                              className="mask mask-star-2 bg-orange-400 checked"
                              readOnly
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="card-actions justify-center">
                      <Link
                        className="btn bg-success dark-text"
                        to={`/product-details/${product.product._id}`}
                      >
                        Details
                      </Link>
                      <button
                        className="btn bg-error dark-text"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <p className="container mx-auto my-10 h-[300px] flex justify-center items-center">
            <span className="text-3xl font-bold">
              You have no Product on Cart :(
            </span>
          </p>
        )}
      </div>
      
    </div>
  );
};

export default MyCartPage;
