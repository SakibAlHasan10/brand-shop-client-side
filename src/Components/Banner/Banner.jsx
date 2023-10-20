import { useContext } from "react";
import Slider from "../../Sheare/Slider/Slider";
import { DataContext } from "../../Pages/RootPage/Root";

const Banner = () => {
  const {loadedData} = useContext(DataContext)
  // console.log(loadedData)
  // const sliderImg = loadedData?.map(sl =>sl.photo )
  return (
    <div className="my-5 md:h-[70vh] max-w-screen-xl mx-auto">
      <div className="md:flex gap-5">
        <div className="w-full h-[70vh] lg:w-3/4">
          <Slider>{loadedData}</Slider>
        </div>
        <div className={`hidden lg:flex w-1/4 relative rounded-lg`}>
            
          <img
            src={loadedData[6]?.photo}
            alt=""
            className={` h-[70vh] rounded-lg`}

          />
          <div className="absolute p-5 text-3xl font-semibold text-center hover:text-red-400 text-white">
            <h2>{loadedData[6]?.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
