import { useLoaderData,} from "react-router-dom";
import Slider from "../../Sheare/Slider/Slider";
import FourProduct from "../../Components/FourProduct/FourProduct";
import { Helmet } from "react-helmet";

const SingleBrand = () => {
  const loadProduct = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-5">
      <Helmet>
      <title>Brand || TidalWave</title>
      </Helmet>
      <Slider>{loadProduct}</Slider>
      <div className="mb-10">
        <div className="grid md:grid-cols-2 gap-10 my-10">
          {loadProduct?.slice(0,4).map((cardInfo) => (
            <FourProduct key={cardInfo._id} cardInfo={cardInfo}></FourProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
