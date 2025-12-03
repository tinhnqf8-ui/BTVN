import { createBrowserRouter } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/DefaultLayout/Home";
import NotFound from "./pages/Error/NotFound";
import Login from "./pages/DefaultLayout/Auth/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        errorElement: <NotFound />,
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
