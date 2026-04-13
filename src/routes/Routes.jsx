import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Components/Homepage/Homepage";
import Banner from "../Components/Banner/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/banner",
        element: <Banner></Banner>
      }
    ],
  },
]);
