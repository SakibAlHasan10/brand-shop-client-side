import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,autoplay, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src="https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/09/young-woman-gardener-caring-plants-treating-flower-2023-01-31-23-19-44-utc-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/09/young-woman-gardener-caring-plants-treating-flower-2023-01-31-23-19-44-utc-1.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
