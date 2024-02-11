import { Swiper, SwiperSlide } from "swiper/react";
import { MoviePhoto } from "../../assets";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Axios } from "../../services/axios";
import { endPoints } from "../../services/endpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { HeaderMain } from "../../components";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [ganresData, setGanresData] = useState([]);
  useEffect(() => {
    const handleGetPopularMovie = async () => {
      const data = await Axios.get(endPoints.popular);
      setData(data.data);
    };
    const handleGetGanres = async () => {
      const data = await Axios.get(endPoints.ganerList);
      setGanresData(data.data);
    };
    handleGetGanres();
    handleGetPopularMovie();
  }, []);

  return <HeaderMain data={data} />;
};
export default HomePage;
