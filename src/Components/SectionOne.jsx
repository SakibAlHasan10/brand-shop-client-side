import { useContext } from "react";
import { DataContext } from "../Pages/RootPage/Root";

const SectionOne = () => {
  const { loadedData } = useContext(DataContext);
  return (
    <div className="lg:flex gap-5 mb-5">
      <div className="md:flex border-2 flex-row-reverse rounded-lg p-5">
        <img
          src={loadedData[3].photo}
          alt=""
          className="w-60 mx-auto mb-4 md:mb-0"
        />
        <div>
          <h2 className="hover:text-red-300 text-2xl font-semibold">
            {loadedData[3].name}
          </h2>
          <p className="my-3">{loadedData[3].description}</p>
          <a className="text-red-500" href="#">
            Read more
          </a>
        </div>
      </div>
      <div className="md:flex border-2 flex-row-reverse rounded-lg p-5 mt-5 lg:mt-0">
        <img
          src={loadedData[13].photo}
          alt=""
          className="w-60 mx-auto mb-4 md:mb-0"
        />
        <div>
          <h2 className="hover:text-red-300 text-2xl font-semibold">
            {loadedData[13].name}
          </h2>
          <p className="my-3">{loadedData[13].description}</p>
          <a className="text-red-500" href="#">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
