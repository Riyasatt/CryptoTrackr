import React from "react";
import ReactDOM from "react-dom";
import App from"./App";
import "./index.css";
import CoinPage from"./components/CoinPage"
import HomePage from"./components/HomePage"
import { RouterProvider,
      createBrowserRouter,
       createRoutesFromElements,
       Route }
     from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';


const root=ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path="/" element={<App/>}>
               <Route path="" element={<HomePage />} />
               <Route path="coin/:id" element={<CoinPage />} />

          </Route>
     )
)


root.render(
     <RouterProvider router={router} />
);