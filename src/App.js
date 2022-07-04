import "./App.css"
import logo from "./logo.png"
import SushiCard from "./SushiCard";
import axios from "axios";
import {useEffect, useState} from "react";
import SushiDiscoveryPage from "./SushiDiscoveryPage";
import NavComponent from "./NavComponent";
import SushiReviewPage from "./SushiReviewPage";

function App() {

  return (
    <div >

        <NavComponent/>
        <SushiDiscoveryPage/>
        {/*<SushiReviewPage/>*/}

    </div>
  );
}

export default App;
