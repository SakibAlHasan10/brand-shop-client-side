import { useLoaderData,} from "react-router-dom";
import Slider from "../../Sheare/Slider/Slider";
import FourProduct from "../../Components/FourProduct/FourProduct";
import { Helmet } from "react-helmet";

const SingleBrand = () => {
  const loadProduct = useLoaderData();
  console.log(loadProduct.length>0)
  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-5">
      <Helmet>
      <title>Brand || TidalWave</title>
      </Helmet>
      {
        (loadProduct.length>0)? <>
        
      <Slider>{loadProduct}</Slider>
      <div className="mb-10">
        <div className="grid md:grid-cols-2 gap-10 my-10">
          {loadProduct?.slice(0,4).map((cardInfo) => (
            <FourProduct key={cardInfo._id} cardInfo={cardInfo}></FourProduct>
          ))}
        </div>
      </div>
        </> : <div className="h-[80vh] flex items-center pb-10 justify-center">
          <h2>This brand products is not available. Please added this branded products.</h2>
        </div>
      }
    </div>
  );
};

export default SingleBrand;
