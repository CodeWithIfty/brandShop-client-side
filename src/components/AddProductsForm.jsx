import { useState } from "react";
import { toast } from "react-toastify";

const AddProductsForm = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rating, setRating] = useState(0);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_img = form.product_img.value;
    const product_name = form.product_name.value;
    const product_price = form.product_price.value;
    const product_description = form.product_description.value;
    const product = {
      product_img,
      product_name,
      product_price,
      product_description,
      selectedBrand,
      selectedCategory,
      rating,
    };

    fetch("https://b8-a10-brand-shop-server-side-tau.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast("Product Added Successfully :)");
      });
    form.reset();
  };

  return (
    <div className="container mx-auto bg-yellow-50 dark-bg my-10 rounded-lg shadow border">
      <form className="p-10" onSubmit={handleFormSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="product_img"
            id="product_img"
            className="block py-2.5 px-0 w-full text-lg font-semibold text-yellow-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_img"
            className="peer-focus:font-medium absolute text-lg font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Image Link
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="product_name"
            id="product_name"
            className="block py-2.5 px-0 w-full text-lg font-semibold text-yellow-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_name"
            className="peer-focus:font-medium absolute text-lg font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="product_price"
            id="product_price"
            className="block py-2.5 px-0 w-full text-lg font-semibold text-yellow-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_price"
            className="peer-focus:font-medium absolute text-lg font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-300 peer-focus:dark:text-yellow-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Price
          </label>
        </div>

        <div className="flex gap-6">
          <div className="relative z-0 w-1/2 mb-6 group">
            <select
              name="product_brand"
              value={selectedBrand}
              onChange={handleBrandChange}
              className="w-full py-2 mt-2 bg-transparent border-b-2 border-gray-600 focus:border-none  text-lg font-semibold dark-text text-yellow-900"
              required
            >
              <option value="">Select Brand</option>
              <option value="Coca-Cola">Coca-Cola</option>
              <option value="Macdonald's">Macdonald's</option>
              <option value="Starbucks">Starbucks</option>
              <option value="PepsiCo">PepsiCo</option>
              <option value="Nestlé">Nestlé</option>
              <option value="Kellogg's">Kellogg's</option>
            </select>
          </div>

          <div className="relative z-0 w-1/2 mb-6 group">
            <select
              name="product_category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full py-2 mt-2 bg-transparent border-b-2 border-gray-600 focus:border-none  text-lg font-semibold dark-text text-yellow-900"
              required
            >
              <option value="">Select Category</option>
              <option value="Carbonated Soft Drinks">
                Carbonated Soft Drinks
              </option>
              <option value="Beverages">Beverages</option>
              <option value="Non-Alcoholic Drinks">Non-Alcoholic Drinks</option>
              <option value="Energy Drinks">Energy Drinks</option>
              <option value="Soda">Soda</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Burgers">Burgers</option>
              <option value="Fries">Fries</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Desserts">Desserts</option>
              <option value="Coffee">Coffee</option>
              <option value="Espresso">Espresso</option>
              <option value="Frappuccino">Frappuccino</option>
              <option value="Tea">Tea</option>
              <option value="Pastries">Pastries</option>
              <option value="Snacks">Snacks</option>
              <option value="Snacks">Snacks</option>
              <option value="Carbonated Soft Drinks">
                Carbonated Soft Drinks
              </option>
              <option value="Chips">Chips</option>
              <option value="Food and Beverage">Food and Beverage</option>
              <option value="Dairy">Dairy</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Coffee">Coffee</option>
              <option value="Health and Wellness">Health and Wellness</option>
              <option value="Breakfast Cereals">Breakfast Cereals</option>
              <option value="Snacks">Snacks</option>
              <option value="Breakfast Foods">Breakfast Foods</option>
              <option value="Cereal Bars">Cereal Bars</option>
              <option value="Nutritional Foods">Nutritional Foods</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <textarea
            name="product_description"
            id=""
            rows="5"
            className="w-full bg-transparent border-2 border-gray-600 p-3"
          ></textarea>
        </div>

        <div className="mt-3 mb-8">
          <div className="">
            <h1>Rating</h1>
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                checked={star === rating}
                onChange={() => handleRatingChange(star)}
                required
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="dark-text dark-bg border bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductsForm;
