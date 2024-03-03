import { useRoutes } from "react-router";
import { routes } from "../routers";

export const Routing = () => {
  const route = useRoutes(routes);
  return route;
};
