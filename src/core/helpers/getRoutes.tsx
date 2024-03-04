import { Route } from "react-router-dom";

export const getRoutes = (routes: RoutesType[]): any => {
  return routes.map((prop, index) => {
    return (
      <Route path={`/${prop.path}`} element={prop.component} key={index} />
    );
  });
};
