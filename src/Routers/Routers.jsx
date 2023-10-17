import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/RootPage/Root";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])

export default routers;