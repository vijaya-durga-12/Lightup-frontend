import {createBrowserRouter} from "react-router-dom"
import Header from "../components/Layout/Header";
import HomePage from "../pages/HomePage";
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
                path:"/Cartpage",
                element:<CartPage/>
            }
        ]


        }
    ]
);
export default AppRouter;
