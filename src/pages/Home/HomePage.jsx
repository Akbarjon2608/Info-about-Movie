import "swiper/css/navigation";
import "swiper/css/pagination";
import { Axios } from "../../services/axios";
import { endPoints } from "../../services/endpoint";
import { useEffect, useState } from "react";
import { Slider } from "../../components";
import TopRared from "../../components/TopRated/TopRared";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [ganresData, setGanresData] = useState(null);
  const [TopRatedData, setTopRatedData] = useState(null);
  useEffect(() => {
    const handleGetPopularMovie = async () => {
      const data = await Axios.get(endPoints.popular);
      setData(data.data);
    };
    const handleGetGanres = async () => {
      const data = await Axios.get(endPoints.ganerList);
      setGanresData(data.data);
    };
    const handleGetTopRated = async () => {
      const data = await Axios.get(endPoints.top_rated);
      setTopRatedData(data.data);
    };
    handleGetTopRated();
    handleGetGanres();
    handleGetPopularMovie();
  }, []);
  return (
    <>
      <Slider data={data} ganresData={ganresData} />{" "}
      <TopRared TopRatedData={TopRatedData} />
    </>
  );
};
export default HomePage;
