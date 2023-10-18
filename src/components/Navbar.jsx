import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
const Navbar = () => {
  const { user, loading, SignOutUser } = useContext(authContext);
  const handleLogout = () => {
    SignOutUser();
  };
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
                <a className="block md:px-4 transition text-gray-600 dark:hover:text-yellow-300 hover:text-yellow-700">
                  Home
                </a>
              </li>
              <li>
                <a className="block md:px-4 transition text-gray-600 dark:hover:text-yellow-300 hover:text-yellow-700">
                  Add Product
                </a>
              </li>
              <li>
                <a className="block md:px-4 transition text-gray-600 dark:hover:text-yellow-300 hover:text-yellow-700">
                  My Cart
                </a>
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
              <NavLink
                to={"/"}
                className="block md:px-4 transition text-gray-600 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-products"}
                className="block md:px-4 transition text-gray-600 "
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <a className="block md:px-4 transition text-gray-600 ">My Cart</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-ring loading-md scale-150 mr-5"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div className=" flex items-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.ibb.co/rHzPb0S/icon-256x256.png" />
                  </div>
                </label>
                <p className="text-black text-sm italic normal-case">
                  {user?.displayName}
                </p>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn font-bold bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300"
            >
              <span className="block text-yellow-900 uppercase font-semibold text-sm">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
