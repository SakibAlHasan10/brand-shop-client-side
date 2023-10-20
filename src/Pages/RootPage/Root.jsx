import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { createContext } from "react";
import useApi from "../../AuthApi/useApi";
export const DataContext = createContext();
const Root = () => {
  const {theme} = useApi()
  const loadedData = useLoaderData();

  const dataInfo = {
    loadedData,
  };
  return (
    <div className={`${theme? 'bg-slate-50': 'bg-black text-white'}`}>
      <DataContext.Provider value={dataInfo}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataContext.Provider>
    </div>
  );
};

export default Root;
