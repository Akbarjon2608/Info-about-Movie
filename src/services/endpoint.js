export const endPoints = {
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
  ganerList: "/genre/movie/list",
  getSingle: (MovieID) => `/movie/${MovieID}`,
  generalSearch: (...param) => `/discover/movie?=${param}`,
  searchMovie: (query) => `/search/movie?query=${query}`,
};
