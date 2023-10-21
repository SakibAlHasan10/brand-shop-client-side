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
    <html data-theme={`${theme? "cupcake":"dark"}`}>
    <div className={``}>
      <DataContext.Provider value={dataInfo}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataContext.Provider>
    </div>
    </html>
  );
};

export default Root;
