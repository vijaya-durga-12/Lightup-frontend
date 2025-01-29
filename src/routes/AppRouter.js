import {createBrowserRouter} from "react-router-dom"
import Header from "../components/Layout/Header";
import HomePage from "../pages/HomePage";

import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
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
                path:"/cartPage",
                element:<CartPage/>
            },
            {
                path:'/signup',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:"/productpage",
                            element:<ProductPage/>
            },
            
        ]


        }
    ]
);
export default AppRouter;
