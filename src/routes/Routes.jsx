import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Components/Homepage/Homepage";
import Banner from "../Components/State/States";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import States from "../Components/State/States";
import Timeline from "../Components/Timeline/Timeline";

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
        path: "/states",
        element: <States></States>
      },
      {
        path : "/timeline",
        element : <Timeline></Timeline>
      }
    ],
    errorElement:<Errorpage></Errorpage>
  },
]);
