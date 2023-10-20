import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "react-rating";
const FourProduct = ({ cardInfo }) => {
//   console.log(cardInfo);
  const {_id, name, brand, price, category, rating, photo } = cardInfo;
  return (
    <div className="text-left">
      <div className="bg-white p-6 rounded-3xl">
        <img src={photo} alt="" className="w-full h-80 mx-auto rounded-3xl" />
        <div className="mx-auto">
          <div className="text-right flex mt-5 font-semibold text-xl ">
            <p>{brand}</p>
            <p className="border-l-2 border-dashed border-red-600 ml-2 pl-2">
              {category}
            </p>
          </div>
          <div className="lg:flex mb-5 items-center justify-between">
            <h2 className="text-3xl mt-2 font-bold text-black">{name}</h2>

            <p className="text-left mt-4 text-red-600 text-xl font-semibold">
              ${price}.00
            </p>
          </div>
          <div>
            <Rating initialRating={rating} readonly />
          </div>
          <div className="lg:flex gap-5 justify-around mt-10">
            <Link to={`/details/${_id}`} className="btn flex-1 w-full btn-outline rounded-3xl">
              Details
            </Link>
            <Link to={`/update/${_id}`} className="btn flex-1 lg:mt-0 mt-5  w-full btn-outline rounded-3xl">
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
FourProduct.propTypes = {
  cardInfo: PropTypes.object,
};
export default FourProduct;
