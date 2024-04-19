export const endPoints = {
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
  ganerList: "/genre/movie/list",
  now_playing: "/movie/now_playing",
  getSingle: (MovieID) => `/movie/${MovieID}`,
  getRecommendation: (MovieID) => `/movie/${MovieID}/recommendations`,
  generalSearch: (...param) => `/discover/movie?=${param}`,
  searchMovie: (query) => `/search/movie?query=${query}`,
};
