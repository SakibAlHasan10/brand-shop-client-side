import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const loaderCart = useLoaderData()
    console.log(loaderCart) 
    return (
        <div>
            my card
        </div>
    );
};

export default MyCart;