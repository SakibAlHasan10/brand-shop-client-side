import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../Sheare/Slider/Slider";

const SingleBrand = () => {
    const loadProduct = useLoaderData()
    const {id} = useParams()
    console.log(id)
    console.log(loadProduct)
    
    return (
        <div>
            <Slider></Slider>
            brand
        </div>
    );
};

export default SingleBrand;