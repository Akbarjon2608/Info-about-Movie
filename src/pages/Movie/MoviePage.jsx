import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";
import { imageW300 } from "../../utils/ImageUrl";
import { Link } from "react-router-dom";
import "./movie.css";
import { DNA } from "react-loader-spinner";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
const MoviePage = () => {
  const [genresOption, setGenresOption] = useState();
  const [genre, setGenres] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    const { response } = await new Movie().getGeneralSearch(
      "&page=4",
      `&with_genres=${genresOption}`
    );
    if (response) {
      setLoading(false);
      setGenres(response);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="movie_container">
      <div className="search_movies">
        <select
          name=""
          id=""
          className="search_select"
          onChange={(e) => setGenresOption(e.target.value)}
        >
          {genres?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
        <button className="btn" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      {!loading ? (
        <div className="search_data">
          {genre?.results.map((item) => (
            <div className="search_item" key={item?.id}>
              <Link
                to={`/about/${item?.id}-${item?.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
              >
                <img src={imageW300(item?.poster_path)} alt="" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="search_loader">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};
export default MoviePage;
