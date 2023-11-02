import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../AuthApi/useApi";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import axios from "axios";
const Details = () => {
  // const loadProduct = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const { user, theme } = useApi();
  const [myCart, setMyCart] = useState([]);
  const [pro, setPro] = useState({});
  const email = user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${email}`, { withCredentials: true })
      .then((data) => {
        console.log("user", data);
        data.data?.myCart ? setMyCart(data?.myCart) : setMyCart([]);
      });
  }, [email]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/details/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setPro(res.data);
      });
  }, [id]);
  const { name, brand, price, category, description, photo } = pro;
  // console.log(myCart);
  const handleMyCart = () => {
    console.log(myCart);
    const findProduct = myCart?.find((prod) => prod._id === pro._id);
    if (!findProduct) {
      const allCart = [...myCart, pro];
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
      console.log(updateCart);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-8 ">
      <Helmet>
        <title>Details || TidalWave</title>
      </Helmet>
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
        className="w-full border md:w-11/12 lg:w-10/12 h-[60vh] md:h-[80vh] lg:h[90vh] rounded-xl"
      />
      <div className="">
        <h2 className="text-3xl mt-8 font-bold ">{name}</h2>
        <p className="mt-3">{description}</p>
        <p className="text-left mt-3 mb-6 text-red-600 text-xl font-semibold">
          ${price}.00
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleMyCart}
          className={`${
            theme ? "text-black" : "text-white"
          } btn btn-outline mb-10 w-full md:w-1/2 `}
        >
          Add to cart
        </button>
      </div>
      <p className="border mb-10 border-black"></p>
    </div>
  );
};

export default Details;
