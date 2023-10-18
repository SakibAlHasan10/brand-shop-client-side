import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/RootPage/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
        ]
    }
])

export default routers;