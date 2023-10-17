import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/RootPage/Root";
import Home from "../Pages/Home/Home";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])

export default routers;