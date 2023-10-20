import { useContext } from "react";
import { DataContext } from "../Pages/RootPage/Root";

const SectionTwo = () => {
  const { loadedData } = useContext(DataContext);

  return (
    <div className="flex w-full rounded-xl border-2 bg-[#f9f8f8] justify-between p-5 mb-5">
      <div className="w-2/3 text-center md:mt-10">
        <h2 className="hover:text-red-300 text-4xl font-bold">
          {loadedData[3].name}
        </h2>
        <p className="my-3">{loadedData[3].description}</p>
      </div>
      <div className="w-1/3 ">

      <img src={loadedData[9].photo} alt="" />
      </div>
    </div>
  );
};

export default SectionTwo;
