import { useParams } from "react-router";
import { Movie } from "@services/serviceApi";
import { useEffect, useState } from "react";
import { imageW500 } from "@utils/ImageUrl";
import "./infoPage.css";
import { DNA } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";

const InfoPage = () => {
  const { id } = useParams();
  const MovieId = id.split("-")[0];

  const [error, setError] = useState("");
  const [singleData, setSingleData] = useState(null);
  const [loader, setIsLoader] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleClick1 = () => {
    setIsClicked1(!isClicked1);
  };
  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const handleClick3 = () => {
    setIsClicked3(!isClicked3);
  };
  useEffect(() => {
    const handleGetSingle = async () => {
      setIsLoader(true);
      const { response } = await new Movie().getSingle(MovieId);
      if (response) {
        setIsLoader(false);
        setSingleData(response);
        setError(error);
      }
      console.log(response);
    };

    handleGetSingle();
  }, [MovieId]);
  const year = new Date(singleData?.release_date);

  return (
    <>
      <div className="info_page">
        <img
          src={imageW500(singleData?.backdrop_path)}
          alt=""
          className="img"
        />
        <div className="img_page"></div>
        <div className="container">
          {!loader ? (
            <>
              <div className="info_about-movie">
                <div className="poster_path-img">
                  <img src={imageW500(singleData?.poster_path)} alt="" />
                </div>
                <div className="title">
                  <div className="title_box">
                    <h1 className="name_movie">{singleData?.title}</h1>{" "}
                    <span className="name_movie">({year.getFullYear()})</span>
                  </div>
                  <div className="title_second_box">
                    <ul className="second_box">
                      <div className="movie_genres">
                        <span className="genres">Genres: </span>
                        {singleData?.genres?.map((item, index) => (
                          <li key={item?.id} className="ganres_movie">
                            {item?.name}
                            {index !== singleData.genres.length - 1 && (
                              <span> /</span>
                            )}
                          </li>
                        ))}
                      </div>

                      <div className="movie_rating">
                        <p className="genres">Popularity:</p>
                        <div className="movie_reating">
                          <li className="movie-rating-bar">
                            {singleData?.popularity}
                          </li>
                        </div>
                        <div className="second_box-icon">
                          <div className="circle" onClick={handleClick}>
                            <FontAwesomeIcon
                              icon={faHeart}
                              className={`icon ${isClicked ? "clicked" : ""}`}
                            />
                          </div>
                          <div className="circle" onClick={handleClick1}>
                            <FontAwesomeIcon
                              icon={faBookmark}
                              className={`icon2 ${isClicked1 ? "clicked" : ""}`}
                            />
                          </div>
                          <div className="circle" onClick={handleClick2}>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={`icon3 ${isClicked2 ? "clicked" : ""}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="description">
                        <li className="Rewiew">Review:</li>
                        <li className="name_movie_description">
                          {singleData?.overview}
                        </li>
                      </div>
                    </ul>{" "}
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
      <div className="info_page-mobile">
        <img
          src={imageW500(singleData?.backdrop_path)}
          alt=""
          className="img_mobile"
        />
        <div className="img_page"></div>
        <div className="container">
          {!loader ? (
            <>
              <div className="info_about-movie">
                <div className="poster_path-img">
                  <img src={imageW500(singleData?.poster_path)} alt="" />
                </div>
                <div className="title">
                  <div className="title_box">
                    <p className="name_movie">{singleData?.title}</p>{" "}
                    <span className="name_movie">({year.getFullYear()})</span>
                  </div>
                  <div className="title_second_box">
                    <ul className="second_box">
                      <div className="movie_rating">
                        <p className="genres">Popularity:</p>
                        <div className="movie_reating">
                          <li className="movie-rating-bar">
                            {singleData?.popularity}
                          </li>
                        </div>
                        <span className="line"></span>
                        <div className="second_box-icon">
                          <div className="circle" onClick={handleClick}>
                            <FontAwesomeIcon
                              icon={faHeart}
                              className={`icon ${isClicked ? "clicked" : ""}`}
                            />
                          </div>
                          <div className="circle2" onClick={handleClick1}>
                            <FontAwesomeIcon
                              icon={faBookmark}
                              className={`icon2 ${isClicked1 ? "clicked" : ""}`}
                            />
                          </div>
                          <div className="circle" onClick={handleClick2}>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={`icon3 ${isClicked2 ? "clicked" : ""}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="description">
                        <li className="Rewiew">Review:</li>
                        <li className="name_movie_description">
                          {singleData?.overview}
                        </li>
                      </div>
                    </ul>{" "}
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
