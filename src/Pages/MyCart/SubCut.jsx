import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApi from "../../AuthApi/useApi";
import { useEffect, useState } from "react";

const SubCut = ({ cart, setMyCart: displayCart }) => {
  const { user, theme } = useApi();
  const email = user?.email;
  //   console.log(email);
  const { _id, name, brand, price, category, photo } = cart;
  const [myCart, setMyCart] = useState([]);
  useEffect(() => {
    fetch(`https://tidal-wave-sever.vercel.app/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCart(data?.myCart);
      });
  }, [email]);
  //   console.log(myCart);
  const handleCartRemove = () => {
    // console.log(myCart);
    const findProduct = myCart?.filter((prod) => prod._id !== _id);
    if (findProduct) {
      const allCart = findProduct;
      const updateCart = {
        email,
        allCart,
      };
      fetch(`https://tidal-wave-sever.vercel.app/users`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount) {
            const filterCart = myCart?.filter((prod) => prod._id !== _id);
            setMyCart(filterCart);
            displayCart(filterCart);
            toast.success("your cart remove successful", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex gap-6 mb-5 py-3 px-5 rounded-xl items-center shadow-md">
        <img src={photo} alt="" className="w-32 h-32 rounded-xl" />
        <div className="w-full flex-1">
          <h2 className="text-2xl md:text-3xl mb-3 font-semibold ">{name}</h2>
          <div className="text-left items-center  justify-between md:flex mb-3 font-semibold text-xl ">
            <div className="text-left flex-1  mb-3 flex font-semibold text-xl ">
              <p>{brand}</p>
              <p className="border-l-2 border-dashed border-red-600 ml-2 pl-2">
                {category}
              </p>
            </div>
            <div className="flex justify-between flex-1 items-center">
              <p className="text-red-600 font-semibold">${price}.00</p>
              <button
                onClick={handleCartRemove}
                className={`${theme? 'text-black':'text-white'} btn btn-outline font-bold text-xl`}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
SubCut.propTypes = {
  cart: PropTypes.object,
  setMyCart: PropTypes.array,
};
export default SubCut;
