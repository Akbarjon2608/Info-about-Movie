import MoviePage from "../pages/Movie/MoviePage";
import InfoPage from "../pages/Info/InfoPage";
import HomePage from "../pages/Home/HomePage";
import Search from "../pages/search/Search";
import { RouteLayut } from "../layouts";
import { routeNames } from "./const";
export const routes = [
  {
    element: <RouteLayut />,
    path: routeNames.HOME,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <MoviePage />,
        path: routeNames.MOVIE,
      },
      {
        element: <InfoPage />,
        path: routeNames.ABOUTID,
      },
      {
        element: <Search />,
        path: routeNames.SEARCH,
      },
    ],
  },
];
