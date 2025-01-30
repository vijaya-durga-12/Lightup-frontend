import {createBrowserRouter} from "react-router-dom"
import Header from "../components/Layout/Header";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import SearchPage from"../pages/SearchPage"
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
                path:'/searchpage',
                element:<SearchPage/>
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
