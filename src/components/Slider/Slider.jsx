import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { imageW500, imageW300 } from "@utils/ImageUrl";
import { DNA } from "react-loader-spinner";

const HeaderMain = ({ data, ganresData, isLoader }) => {
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
              const luboy = item?.genre_ids;
              const filteredList = luboy.map((item) =>
                ganresData?.genres?.find((ganresId) => ganresId?.id === item)
              );
              return (
                <SwiperSlide key={item?.id} className="slider_box">
                  {!isLoader ? (
                    <>
                      <img src={imageW500(item?.backdrop_path)} alt="" />
                      <div className="slide_content">
                        <div className="slide_item">
                          <h1>{item?.original_title}</h1>
                          <p>
                            {item?.overview?.length > 65 &&
                              item?.overview?.slice(0, 65) + "..."}
                          </p>
                          <div className="slide_calendar" key={item?.id}>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <p>{item?.release_date}</p>
                            {filteredList.map((item) => (
                              <p key={item?.id}>
                                {item?.name}
                                {filteredList[filteredList.length - 1]?.name ===
                                item?.name
                                  ? " "
                                  : " / "}
                              </p>
                            ))}
                          </div>
                          <Link
                            to={`about/${item?.id}-${item?.title
                              .replaceAll(" ", "-")
                              .toLowerCase()}`}
                          >
                            <button className="button">Show more</button>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <DNA
                      visible={true}
                      height="140"
                      width="140"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="main_slider-box-mobile">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data?.results.map((item) => {
              const luboy = item?.genre_ids;
              const filteredList = luboy.map((item) =>
                ganresData?.genres?.find((ganresId) => ganresId?.id === item)
              );
              return (
                <SwiperSlide key={item?.id} className="slider_box--mobile">
                  {!isLoader ? (
                    <>
                      <img
                        src={imageW300(item?.backdrop_path)}
                        alt=""
                        className="slider_img-mobile"
                      />
                      <Link
                        to={`about/${item?.id}-${item?.title
                          .replaceAll(" ", "-")
                          .toLowerCase()}`}
                      >
                        <div className="slide_content_mobile">
                          <button className="button_mobile">Show more</button>
                        </div>
                      </Link>
                    </>
                  ) : (
                    <DNA
                      visible={true}
                      height="140"
                      width="140"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  )}
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
