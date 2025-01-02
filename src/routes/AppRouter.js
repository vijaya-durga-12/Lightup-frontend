import {createBrowserRouter} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute";
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