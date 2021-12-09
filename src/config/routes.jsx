import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
  ];
};

export default routes;
