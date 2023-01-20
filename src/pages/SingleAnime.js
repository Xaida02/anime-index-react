import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleAnime = () => {
  const [currentAnime, setCurrentAnime] = useState(null);
  const [localLoading, setLocalLoading] = useState(true);
  const { name } = useParams();

  const { fetchData, animeList, setAnimeList, setName, setLoading } =
    useGlobalContext();

  const localFetch = async () => {
    await fetch("https://api.jikan.moe/v4/anime?q=" + name)
      .then((response) => response.json())
      .then((animeApi) => {
        console.log(animeApi.data);
        setCurrentAnime(animeApi.data.find((anime) => anime.title === name));
        setLocalLoading(false);
      })
      .catch((error) => {
        console.log(error, "!!!!");
        throw new Error("Couldn't load the current anime data.");
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    localFetch();
    console.log(currentAnime);
  }, []);

  // useEffect(() => {
  //   if (currentAnime) {
  //     setLocalLoading(false);
  //   }
  // }, [currentAnime]);

  if (localLoading) {
    return <Loading />;
  }

  const {
    images,
    title_english,
    title_japanese,
    source,
    episodes,
    genres,
    synopsis,
  } = currentAnime;

  return (
    <section className="section anime-section">
      <div className="show">
        <img src={images.jpg.large_image_url} alt={`${title_english} pic`} />
        <h2 className="section-title name">{name}</h2>
        <div className="show-info">
          <p>
            <span className="show-data">English name:</span>
            {title_english}
          </p>
          <p>
            <span className="show-data">Japanese name:</span>
            {title_japanese}
          </p>
          <p>
            <span className="show-data">source:</span>
            {source}
          </p>
          <p>
            <span className="show-data">episodes:</span>
            {episodes}
          </p>
          <p>
            <span className="show-data">genres:</span>
            {genres.map((item) => item.name).join(", ")}
          </p>
        </div>
      </div>
      {synopsis && (
        <div className="synopsis-box">
          <h2>Synopsis: </h2>
          <p className="synopsis">{synopsis}</p>
        </div>
      )}
      <a style={{ alignSelf: "center" }} className="btn btn-home" href="/">
        Back home
      </a>
    </section>
  );
};

export default SingleAnime;
