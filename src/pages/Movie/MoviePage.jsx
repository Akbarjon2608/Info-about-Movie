import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";

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
  useEffect(() => {
    const handleSearch = async () => {
      const { response } = await new Movie().getGeneralSearch(
        "&page=4",
        `&with_genres=${genresOption}`
      );
      console.log(response);
    };
    handleSearch();
  }, []);

  return (
    <div className="movie_container">
      <div className="search_movies">
        <select name="" id="" onChange={(e) => setGenresOption(e.target.value)}>
          {genres?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
        <input type="date" />
      </div>
    </div>
  );
};
export default MoviePage;
