import { useContext } from "react";
import Slider from "../../Sheare/Slider/Slider";
import { DataContext } from "../../Pages/RootPage/Root";

const Banner = () => {
  const {loadedData} = useContext(DataContext)
  console.log(loadedData)
  const sliderImg = loadedData?.map(sl =>sl.photo )
  console.log(sliderImg)
  return (
    <div className="my-5 md:h-[70vh] max-w-screen-xl mx-auto">
      <div className="md:flex gap-5">
        <div className="w-full lg:w-3/4">
          <Slider>{loadedData}</Slider>
        </div>
        <div className={`hidden lg:flex w-1/4 rounded-lg`}>
            
          <img
            src={loadedData[6].photo}
            alt=""
            className={` h-[70vh] rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
