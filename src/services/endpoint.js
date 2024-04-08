export const endPoints = {
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
  ganerList: "/genre/movie/list",
  now_playing: "/movie/now_playing",
  recommendations: "movie/movie_id/recommendations",
  getSingle: (MovieID) => `/movie/${MovieID}`,
  generalSearch: (...param) => `/discover/movie?=${param}`,
  searchMovie: (query) => `/search/movie?query=${query}`,
};
