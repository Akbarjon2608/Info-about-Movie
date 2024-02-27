import { useParams } from "react-router";
import { Movie } from "@services/serviceApi";
import { useEffect, useState } from "react";
import { imageW500 } from "@utils/ImageUrl";
import "./infoPage.css";
import { DNA } from "react-loader-spinner";

const InfoPage = () => {
  const { id } = useParams();
  const MovieId = id.split("-")[0];

  const [error, setError] = useState("");
  const [singleData, setSingleData] = useState(null);
  const [loader, setIsLoader] = useState(null);
  useEffect(() => {
    const handleGetSingle = async () => {
      setIsLoader(true);
      const { response } = await new Movie().getSingle(MovieId);
      if (response) {
        setIsLoader(false);
        setSingleData(response);
        setError(error);
      }
    };
    handleGetSingle();
  }, [MovieId]);
  const year = new Date(singleData?.release_date);

  return (
    <>
      <div className="info_page">
        <div className="container">
          {!loader ? (
            <>
              <div className="img">
                <img src={imageW500(singleData?.poster_path)} alt="" />
              </div>
              <div className="info_about-movie">
                <div className="title">
                  <div className="title_box">
                    <h1 className="name_movie">{singleData?.title}</h1>{" "}
                    <span className="name_movie">({year.getFullYear()})</span>
                  </div>
                  <div className="title_second_box">
                    <ul>
                      {singleData?.genres?.map((item) => (
                        <li key={item?.id} className="ganres_movie">
                          {item?.name}
                        </li>
                      ))}
                      <div className="movie_reating">
                        <li className="movie-rating-bar">
                          <h1>{singleData?.popularity}</h1>
                        </li>
                      </div>
                      <div className="description">
                        <li className="Review">Review:</li>
                        <li className="name_movie_description">
                          {singleData?.overview}
                        </li>
                      </div>
                    </ul>{" "}
                    <div className="img">
                      <img
                        src={imageW500(singleData?.backdrop_path)}
                        alt=""
                        className="img"
                      />
                    </div>
                  </div>
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
        </div>
      </div>
    </>
  );
};

export default InfoPage;
