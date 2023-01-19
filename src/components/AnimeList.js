import React from "react";
import Anime from "./Anime";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const AnimeList = () => {
  const { loading, animeList, name } = useGlobalContext();

  if (loading && !animeList) {
    return (
      <h2 className="section-title">
        <Loading />
      </h2>
    );
  }

  if (animeList && !animeList.length) {
    return (
      <section className="bottom-section">
        <h2 className="section-title">anime not found</h2>
      </section>
    );
  }

  return (
    <section className="section bottom-section">
      <h2 className="section-title">
        {name ? `Search results for "${name}"` : "Animes"}
      </h2>
      <div className="anime-center">
        {animeList.map((anime) => (
          <Anime {...anime} key={anime.mal_id} />
        ))}
      </div>
    </section>
  );
};

export default AnimeList;
