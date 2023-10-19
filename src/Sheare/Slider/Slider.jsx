import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = ({ children }) => {
  console.log(children, 'kkkkkk')
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        height={50}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* <SwiperSlide>
          <img
            src={loadedData[2]?.photo}
            alt=""
            className="h-[70vh] w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={loadedData[6]?.photo}
            alt=""
            className="h-[70vh] w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={loadedData[12]?.photo}
            alt=""
            className="h-[70vh] w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={loadedData[9]?.photo}
            alt=""
            className="h-[70vh] w-full rounded-lg"
          />
        </SwiperSlide> */}
        {
          children?.slice(0,3).map(sl =><SwiperSlide key={sl._id}>
            <img
              src={sl?.photo}
              alt=""
              className="h-[70vh] w-full rounded-lg"
            />
          </SwiperSlide> )
        }
      </Swiper>
    </div>
  );
};
Slider.propTypes={
  children: PropTypes.array
}
export default Slider;
