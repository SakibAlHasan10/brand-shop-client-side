import Slider from "../../Sheare/Slider/Slider";

const Banner = () => {
  return (
    <div className="my-5 md:h-[70vh] max-w-screen-xl mx-auto">
      <div className="md:flex gap-5">
        <div className="w-full lg:w-3/4">
          <Slider></Slider>
        </div>
        <div className={`hidden lg:flex w-1/4 rounded-lg`}>
            
          <img
            src="https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/09/image-2-1.jpg"
            alt=""
            className={` h-[70vh] rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
