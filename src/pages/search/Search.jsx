import {
  faSearch,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";
import { useEffect, useState } from "react";
import { Movie } from "@services/serviceApi";
import { imageW300 } from "@utils/ImageUrl";
import { Link } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = async (e) => {
    if (e) {
      const { response } = await new Movie().getSearchResult(e);
      setSearch(response);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="search">
      <div className="search_container">
        <div className="search_panel">
          <input
            type="search"
            className="search_input"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search_icon" />
        </div>
        {search?.results?.map((item) => (
          <li key={item?.id} className="search_box">
            <Link
              to={`/about/${item?.id}-${item?.title
                .replaceAll(" ", "-")
                .toLowerCase()}`}
            >
              <img src={imageW300(item.poster_path)} alt="" />
            </Link>
          </li>
        ))}
        {search?.results.length === 0 && (
          <li className="search_error">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              size="4x"
              color="orange"
            />
            <h1 className="search_error-title">Movie isn't found</h1>
          </li>
        )}
      </div>
    </div>
  );
};

export default Search;
