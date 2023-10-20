import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { createContext } from "react";
export const DataContext = createContext();
const Root = () => {
  const loadedData = useLoaderData();

  const dataInfo = {
    loadedData,
  };
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
