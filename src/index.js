import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <RouterProvider router={router}></RouterProvider>
);
