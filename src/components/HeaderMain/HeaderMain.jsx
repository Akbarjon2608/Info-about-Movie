import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
const HeaderMain = ({ data }) => {
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
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data?.results.map((item) => {
              console.log(item?.genre_ids);
              const luboy = item?.genre_ids;
              const filteredList = luboy.map((item) =>
                luboy?.genres?.find((ganresId) => ganresId?.id === item)
              );
              console.log(filteredList);
              return (
                <SwiperSlide key={item?.id} className="slider_box">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                    alt=""
                  />
                  <div className="slide_content">
                    <div className="slide_item">
                      <h1>{item?.original_title}</h1>
                      <p>
                        {item?.overview?.length > 65 &&
                          item?.overview?.slice(0, 65) + "..."}
                      </p>
                      <div className="slide_calendar">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <p>{item?.release_date}</p>
                      </div>
                      <button className="button">Show more</button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
