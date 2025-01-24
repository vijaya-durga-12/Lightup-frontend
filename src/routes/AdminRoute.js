import { createBrowserRouter } from "react-router-dom";
import AdminHeader from "../components/AdminPane/AdminHeader";
import AdminLoginPage from "../pages/AdminPages/AdminLoginPage";

const AdminRoute = createBrowserRouter([
  {
    path: '/adminheader',
    element: <AdminHeader />,
    children: [
      {
        path: "adminlogin", 
        element: <AdminLoginPage />,
        index: true,
      },
    ],
  },
]);

export default AdminRoute;
