import React, { useEffect, useState } from "react";
import api from "./Api";
import Placeholder from "./Placeholder";
import Episode from "./Episode";
import ShowContext from "./ShowContext";
import Layout from "./Layout";
import Name from "./Name";
import Image from "./Image";
import Description from "./Description";

export function Show({ match }) {
  const [show, setShow] = useState({});
  const [episodes, setEpisodes] = useState({});
  const [open, isOpen] = useState(false);

  useEffect(() => {
    async function getShow() {
      setShow(await api.getShow(`shows/139`));
    }
    async function getEpisodes() {
      setEpisodes(await api.getEpisodes(`shows/139/episodes`));
    }
    getShow();
    getEpisodes();
  }, [match]);

  return (
    <>
      <Placeholder name={show.name} />
      <Layout
        Name={<Name name={show.name} />}
        Image={<Image image={show.image} />}
        Description={<Description description={show.summary} />}
      />
      <div className="episodes-container">
        <button
        className="show-button"
          onClick={() => {
            isOpen(!open);
          }}
        >
         {open ? "Show Less" : "Show More"}
        </button>
        <div className="episodes-list-container">
          {open
            ? Object.values(episodes).map((e) => (
                <ul className="episodes-list">
                  <li key={e.name} className="episode-link">
                    <a href={`/episodes/${e.id}`}>{e.name}</a>
                  </li>
                </ul>
              ))
            : Object.values(episodes)
                .slice(0, 5)
                .map((e) => (
                 <ul className="episodes-list">
                  <li key={e.name} className="episode-link">
                      <a href={`/episodes/${e.id}`}>{e.name}</a>
                    </li>
                  </ul>
                ))}
        </div>
      </div>
    </>
  );
}

export default Show;
