import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-20 text-5xl w-full ">
            <img src="https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/10/404-01-800x322.png" alt="" className="w-1/2 mx-auto" />
            <h2 className="text-center text-green-700 text-4xl lg:text-5xl my-4 font-bold">Oops! Page Not Found</h2>
            <Link to={'/'}>
            <button className="btn btn-neutral">Go home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;