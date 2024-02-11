import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
const TopRared = ({ TopRatedData }) => {
  return (
    <>
      <section className="top_rated">
        <div className="rated_container">
          <h1 className="top_rated">Top Rated</h1>
          <Swiper
            spaceBetween={100}
            slidesPerView={3}
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {TopRatedData?.results?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="rated_slides">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TopRared;
