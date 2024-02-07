import { Swiper, SwiperSlide } from "swiper/react";
import { MoviePhoto } from "../../assets";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <section className="section">
      <div className="main_container">
        <div className="main_slider-box">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            loop
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="slider_box">
              <img src={MoviePhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img src={MoviePhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img src={MoviePhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img src={MoviePhoto} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
