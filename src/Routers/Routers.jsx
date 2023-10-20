import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/RootPage/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: ()=>fetch('http://localhost:5000/products'),
        errorElement:<ErrorPage/>,
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
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
            },
            {
                path: '/brand/:id',
                element: <SingleBrand></SingleBrand>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
            },
        ]
    }
])

export default routers;