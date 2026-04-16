import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import FriendProvider from './Components/Context/FriendProvider';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <Toaster position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
  </StrictMode>,
);
