const AddProductsForm = () => {
  return (
    <div className="container mx-auto bg-yellow-50 my-10 rounded-lg shadow border-2">
      <form className="p-10">
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
              name="Brand"
              id=""
              className="w-full py-2 mt-2 bg-transparent border-b-2 border-gray-600 focus:border-none  text-lg font-semibold text-yellow-900"
            >
              <option value="">Select Brand</option>
              <option value="">Coca-Cola</option>
              <option value="">Macdonald's</option>
            </select>
          </div>

          <div className="relative z-0 w-1/2 mb-6 group">
            <select
              name="Category"
              id=""
              className="w-full py-2 mt-2 bg-transparent border-b-2 border-gray-600 focus:border-none  text-lg font-semibold text-yellow-900"
            >
              <option value="">Select Category</option>
              <option value="">Coca-Cola</option>
              <option value="">Macdonald's</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <textarea
            name=""
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
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductsForm;
