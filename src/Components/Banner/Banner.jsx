import Slider from "../../Sheare/Slider/Slider";

const Banner = () => {
    return (
        <div className="my-5 h-[70vh] ">
            <div className="flex gap-5 ">
                <div className="w-3/4">
            <Slider></Slider>
                </div>
            <img src="https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/09/image-2-1.jpg" alt="" className="w-1/4 h-[70vh] rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;