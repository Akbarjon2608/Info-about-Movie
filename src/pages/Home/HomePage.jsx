import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Slider, Upcoming } from "../../components";
import TopRared from "../../components/TopRated/TopRared";
import { Movie } from "../../services/serviceApi";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [ganresData, setGanresData] = useState(null);
  const [TopRatedData, setTopRatedData] = useState(null);
  const [UpcomingData, setUpcomingData] = useState(null);
  useEffect(() => {
    const handleGetPopularMovie = async () => {
      const { response } = await new Movie().getPopular();
      setData(response);
    };
    const handleGetGanres = async () => {
      const { response } = await new Movie().getGanres();
      setGanresData(response);
    };
    const handleGetTopRated = async () => {
      const { response } = await new Movie().getTopRated();
      setTopRatedData(response);
    };
    const handleGetUpcoming = async () => {
      const { response } = await new Movie().getUpcoming();
      setUpcomingData(response);
    };
    handleGetUpcoming();
    handleGetTopRated();
    handleGetGanres();
    handleGetPopularMovie();
  }, []);
  return (
    <>
      <Slider data={data} ganresData={ganresData} />{" "}
      <TopRared TopRatedData={TopRatedData} />
      <Upcoming UpcomingData={UpcomingData} />
    </>
  );
};
export default HomePage;
