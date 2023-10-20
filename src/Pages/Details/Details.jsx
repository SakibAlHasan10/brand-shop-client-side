import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadProduct = useLoaderData();
  const { name, brand, price, category, description, photo } =
    loadProduct;
//   console.log(loadProduct);
  return (
    <div className="max-w-screen-xl mx-auto px-8 ">
      <div className="text-center justify-center mb-8 flex mt-10 font-semibold text-xl ">
        <p>{brand}</p>
        <p className="border-l-2 border-dashed border-red-600 ml-2 pl-2">
          {category}
        </p>
      </div>
      <img
        src={photo}
        alt=""
        className="w-full md:w-11/12 lg:w-10/12 h-[60vh] md:h-[80vh] lg:h[90vh] rounded-xl"
      />
        <div className="">
          <h2 className="text-3xl mt-8 font-bold text-black">{name}</h2>
          <p className="mt-3">{description}</p>
          <p className="text-left mt-3 mb-6 text-red-600 text-xl font-semibold">
            ${price}.00
          </p>
        </div>
        <div className="flex justify-center">

        <button className="btn btn-outline mb-10 w-full md:w-1/2 ">Add to cart</button>
        </div>
        <p className="border mb-10 border-black"></p>
    </div>
  );
};

export default Details;
