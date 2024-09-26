import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServicesProvided from "./Pages/ServicesProvided/ServicesProvided";
import React from "react";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services/",
      element: <ServicesProvided />,
    },
    {
      path:"/contactus/",
      element:<ContactUs/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
