import { useContext } from "react";
import { DataContext } from "../Pages/RootPage/Root";

const SectionOne = () => {
  const { loadedData } = useContext(DataContext);
  return (
    <div className="lg:flex gap-5 mb-5">
      <div className="md:flex border-2 rounded-lg p-5">
        <div>
          <h2 className="hover:text-red-300 text-2xl font-semibold">{loadedData[3].name}</h2>
          <p className="my-3">{loadedData[3].description}</p>
          <a className="text-red-500" href="#">Read more</a>
        </div>
        <img src={loadedData[3].photo} alt=""  className="w-60"/>
      </div>
      <div className="md:flex border-2 rounded-lg p-5 mt-5 lg:mt-0">
        <div>
          <h2 className="hover:text-red-300 text-2xl font-semibold">{loadedData[8].name}</h2>
          <p className="my-3">{loadedData[8].description}</p>
          <a className="text-red-500" href="#">Read more</a>
        </div>
        <img src={loadedData[13].photo} alt="" className="w-60" />
      </div>
    </div>
  );
};

export default SectionOne;
