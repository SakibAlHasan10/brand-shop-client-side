import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { createContext } from "react";
import useApi from "../../AuthApi/useApi";
export const DataContext = createContext();
const Root = () => {
  const loadedData = useLoaderData();
  const {theme} = useApi()
  const dataInfo = {
    loadedData,
  };
  return (
    <div className={``}>
      <div data-theme={`${theme?"light":"dark"}`}>
      <DataContext.Provider value={dataInfo}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataContext.Provider>
    </div>
    </div>
  );
};

export default Root;