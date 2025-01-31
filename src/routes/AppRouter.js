import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import AdminHeader from "../components/AdminPane/AdminHeader";
import AdminRoute from "./AdminRoute";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/productpage",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
        <AdminHeader />
    ),
    children: AdminRoute,
  },
]);

export default AppRouter;
