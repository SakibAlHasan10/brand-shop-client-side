import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useApi from "../../AuthApi/useApi";
import { ToastContainer, toast } from "react-toastify";
const Details = () => {
  const loadProduct = useLoaderData();
  const { user } = useApi();
  const [myCart, setMyCart] = useState([]);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        (data?.myCart? setMyCart(data?.myCart): setMyCart([]));
      });
  }, [email]);
  const { name, brand, price, category, description, photo } = loadProduct;
  // console.log(myCart);
  const handleMyCart = () => {
    // console.log(myCart)
    const findProduct = myCart?.find((prod) => prod._id === loadProduct._id);
    if (!findProduct) {
      const allCart = [...myCart, loadProduct];
      const updateCart = {
        email,
        allCart,
      };
      fetch(`http://localhost:5000/users`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount) {
            toast.success("your cart add successful", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
      // console.log(updateCart);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-8 ">
      <ToastContainer />
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
        <button
          onClick={handleMyCart}
          className="btn btn-outline mb-10 w-full md:w-1/2 "
        >
          Add to cart
        </button>
      </div>
      <p className="border mb-10 border-black"></p>
    </div>
  );
};

export default Details;
