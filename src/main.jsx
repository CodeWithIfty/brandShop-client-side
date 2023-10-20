import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AddProducts from "./pages/AddProducts.jsx";
import BrandPage from "./pages/BrandPage/BrandPage.jsx";
import MyCartPage from "./pages/MyCartPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ErroPage from "./pages/ErroPage.jsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoute.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:brand",
        element: <BrandPage />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/product/${params.brand}`
          ),
      },
      {
        path: "/my-cart/:email",
        element: (
          <PrivateRoute>
            <MyCartPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/cart-products/${params.email}`
          ),
      },
      {
        path: "/product-details/:_id",
        element: (
          <PrivateRoute>
            <ProductDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/product-details/${params._id}`
          ),
      },
      {
        path: "/update-product/:_id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/product-details/${params._id}`
          ),
      },
    ],
    errorElement: <ErroPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
