import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import MyRouter from "./Components/Router";
import GlobalStyle from "./GlobalStyles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Fragment>
    <GlobalStyle/>
    <MyRouter />
  </Fragment>
);
