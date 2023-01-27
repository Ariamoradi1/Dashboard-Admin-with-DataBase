import React from "react";
import Chartdash from "./Charts/Chartdash";
import Dashboard from "./Dashboard/Dashboard";
import Listme from "./List/Listme";
import Tabels from "./Tabels/Tabels";

const Home = () => {
    return(
        <>
        <Dashboard/>
        <Chartdash/>
        <Tabels/>
        <Listme/>
        </>
    )
}

export default Home