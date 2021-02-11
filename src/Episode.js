import React, { useEffect, useState } from "react";
import api from "./Api";
import Layout from "./Layout";
import Placeholder from "./Placeholder";
import Image from "./Image";
import Name from "./Name";
import {  useParams } from 'react-router-dom';

import Description from "./Description";
import EpisodeContext from "./EpisodeContext";

export function Episode({ match }) {
  const [episode, setEpisode] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function getEpisode() {
      setEpisode(await api.getEpisode(`${id}`));
    }
    getEpisode();
  }, []);
  return (
    <EpisodeContext.Provider
    value={{
      episode,
      setEpisode
    }}
    >
      <Placeholder name={episode.name} />
      <Layout
        Name={<Name name={episode.name} />}
        Image={<Image image={episode.image} />}
        Description={<Description description={episode.summary} />}
      />
    </EpisodeContext.Provider>
  );
}

export default Episode;
