import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../Sheare/Slider/Slider";
import FourProduct from "../../Components/FourProduct/FourProduct";

const SingleBrand = () => {
  const loadProduct = useLoaderData();
  const { id } = useParams();
  console.log(id);
  console.log(loadProduct);
  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-5">
      <Slider>{loadProduct}</Slider>
      <div className="mb-10">
        <div className="grid md:grid-cols-2 gap-10 my-10">
          {loadProduct?.map((cardInfo) => (
            <FourProduct key={cardInfo._id} cardInfo={cardInfo}></FourProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
