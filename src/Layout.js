import { Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Steps from "./Steps"
import MainCard from "./MainCard";
// import NotFound from "./NotFound";


function Layout() {
  return (
    <span>
      <Header />
      <div className="container">
          <MainCard />
          <Steps />
      </div>
    </span>
  );
}

export default Layout;