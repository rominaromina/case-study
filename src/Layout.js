import React, { useEffect, useState } from "react";
import "./App.css";

import api from "./Api";


function Layout({ Name, Image, Description, Next }) {
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    async function getEpisode() {
      setEpisode(await api.getEpisode(1));
    }
    getEpisode();
  }, []);
  return (
      <div className="wrapper">
        <div className="container logo-container">
          <img className="logo" src="./images/logo@2x.jpg" width="280" alt="" />
        </div>
        <div className="container display"  id="load-next">
          {Image}
          {Next}
        </div>
        <div className="container name"> {Name}</div>
        <div className="container description"> {Description}</div>
      </div>
  );
}

export default Layout;
