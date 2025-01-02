import {createBrowserRouter} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute";
import Header from "../components/Layout/Header";
const AppRouter =createBrowserRouter(
    [
        {
            path:"/",
            element:<ProtectedRoute/>,
            children:[{
                path:"/",
                element:<Header/>,
                index:true
            },
        ]


        }
    ]
);
export default AppRouter;