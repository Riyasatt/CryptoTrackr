import React from "react";
import ReactDOM from "react-dom";
import App from"./App";
import "./index.css";
import CryptoContext from "./CryptoContext";
import CoinPage from"./components/CoinPage"
import HomePage from"./components/HomePage"
import { RouterProvider,
      createBrowserRouter,
       createRoutesFromElements,
       Route }
     from "react-router-dom";


const root=ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path="/" element={<App/>}>
               <Route path="" element={<HomePage />} />
               <Route path="Coin" element={<CoinPage />} />

          </Route>
     )
)


root.render(
     <CryptoContext>
               <RouterProvider router={router} />
     </CryptoContext>

);