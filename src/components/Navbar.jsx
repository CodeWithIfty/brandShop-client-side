import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 container  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="block md:px-4 transition text-gray-600 dark:hover:text-yellow-300 hover:text-yellow-700">Home</a>
              </li>
              <li>
                <a className="block md:px-4 transition text-gray-600 dark:hover:text-yellow-300 hover:text-yellow-700">Add Product</a>
              </li>
              <li>
                <a className="block md:px-4 transition text-gray-600 dark:hover:text-yellow-300 hover:text-yellow-700">My Cart</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost  text-2xl uppercase text-yellow-900 font-bold">
            {" "}
            <img src={logo} alt="Foody" className="w-12" />
            Foody
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="block md:px-4 transition text-gray-600 ">Home</a>
            </li>
            <li>
              <a className="block md:px-4 transition text-gray-600 ">Add Product</a>
            </li >
            <li>
              <a className="block md:px-4 transition text-gray-600 ">My Cart</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn font-bold bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300">
            <span className="block text-yellow-900 uppercase font-semibold text-sm">
              Login
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
