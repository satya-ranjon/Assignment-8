import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AppWrapper from "../layout/AppWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
]);

export default router;
