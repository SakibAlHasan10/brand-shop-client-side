import { useEffect, useState } from "react";
import useApi from "../../AuthApi/useApi";
import SubCut from "./SubCut";

const MyCart = () => {
  const { user } = useApi();
  const [myCart, setMyCart] = useState([]);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCart(data.myCart);
      });
  }, [email]);
  console.log(myCart);
  return (
    <div className="max-w-screen-xl mb-14 mt-10 mx-auto px-8 ">
        <h2 className="text-4xl font-bold mb-8">My Cart</h2>
      <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        {myCart?.map((cart, idx) => (
          <SubCut key={idx} cart={cart}></SubCut>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
