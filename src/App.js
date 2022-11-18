import './App.css';
import React from "react";
import Layout from "./Layout";
import {useState} from "react";
import {AppContext} from "./Context";

function App() {


    const [layout, setLayout] = useState("HOME")

    return (
        <AppContext.Provider value={{
            layout,
            setLayout
        }}>
            <Layout/>
        </AppContext.Provider>
    );


}

export default App;
