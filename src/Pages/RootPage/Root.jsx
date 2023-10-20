import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { createContext, useEffect, useState, } from "react";
import useApi from "../../AuthApi/useApi";
export const DataContext = createContext()
const Root = () => {
  const { user } = useApi();
    const loadedData = useLoaderData()
    const [userCart, setUserCart] = useState([])
    const email = user?.email;
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${email}`)
        .then(res =>res.json())
        .then(data => setUserCart(data.myCart))
      },[email])
    const dataInfo ={
        loadedData,
        userCart
    }
    return (
        <div className="bg-slate-50">
            <DataContext.Provider value={dataInfo}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </DataContext.Provider>
        </div>
    );
};

export default Root;