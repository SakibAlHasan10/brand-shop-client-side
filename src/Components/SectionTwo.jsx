import { useContext } from "react";
import { DataContext } from "../Pages/RootPage/Root";

const SectionTwo = () => {
  const { loadedData } = useContext(DataContext);

  return (
    <div className="flex flex-col-reverse text-black  w-full rounded-xl border-2 bg-[#f9f8f8] justify-between p-5 mb-5">
      <div className="md:w-2/3 mt-6 text-center md:mt-10 mx-auto">
        <h2 className="hover:text-red-300 text-4xl font-bold">
          {loadedData[3].name}
        </h2>
        <p className="my-3">{loadedData[3].description}</p>
      </div>
      <div className="lg:w-1/3 mx-auto ">
        <div className="mt-8 lg:mt-0 w-80">
          <img src={loadedData[9].photo} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
