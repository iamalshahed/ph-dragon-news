import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
