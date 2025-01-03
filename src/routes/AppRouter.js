import {createBrowserRouter} from "react-router-dom"
import Header from "../components/Layout/Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
const AppRouter =createBrowserRouter(
    [
        {
            path:"/",
            element:<Header/>,
            children:[{
                path:"/",
                element:<HomePage/>,
                index:true
            },
            {
                path:"/Cartpage",
                element:<CartPage/>
            },
            {
                path:'/signup',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]


        }
    ]
);
export default AppRouter;
