import React, {useContext, useState} from "react";
import Header from "./Header";
import Steps from "./Steps"
import MainCard from "./MainCard";
import {AppContext} from "./Context";
import ServiceInfoCard from "./ServiceInfoCard";
import StepsAsMenu from "./StepsAsMenu";


function Layout() {

    const {layout} = useContext(AppContext);

    let layoutInternals;

    if (layout === "HOME") {
        layoutInternals = <div className="container" style={{ marginTop: "25px" }} >
            <MainCard/>
            <Steps/>
        </div>
    } else {
        layoutInternals = <div className="container"  style={{ marginTop: "25px" }} >

            <StepsAsMenu />
            <ServiceInfoCard/>
        </div>
    }

    return (
        <span>
            <Header />
            {layoutInternals}
        </span>
    );
}

export default Layout;