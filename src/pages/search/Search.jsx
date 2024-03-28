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
import { UseDebounce } from "../../hook/UseDebounce";
const Search = () => {
  const [search, setSearch] = useState(null);
  const [searchingValue, setSearchingValue] = useState("");
  const [loader, setLoader] = useState("");
  const { debounceValue } = UseDebounce(searchingValue);
  useEffect(() => {
    const handleSearch = async () => {
      setLoader(true);
      if (debounceValue) {
        const { response } = await new Movie().getSearchResult(debounceValue);
        if (response) {
          setSearch(response);
          setLoader(false);
        }
      }
    };
    handleSearch();
  }, [debounceValue]);

  return (
    <div className="search">
      <div className="search_container">
        <div className="search_panel">
          <input
            type="search"
            className="search_input"
            onChange={(e) => setSearchingValue(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search_icon" />
        </div>
        {!loader ? (
          <ul className="search_ul">
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
          </ul>
        ) : (
          <div className="search_loader">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
