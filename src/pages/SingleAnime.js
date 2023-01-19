import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleAnime = () => {
  const [currentAnime, setCurrentAnime] = useState(null);
  const [localLoading, setLocalLoading] = useState(true);
  const { name } = useParams();

  const { animeList, setAnimeList, setName, setLoading } = useGlobalContext();
  const stateName = useGlobalContext().name;

  const localFetch = async () => {
    await fetch("https://api.jikan.moe/v4/anime?q=" + name)
      .then((response) => response.json())
      .then((animeApi) => {
        setAnimeList(animeApi.data);
        console.log(animeApi.data);
        setCurrentAnime(animeApi.data.find((anime) => anime.title === name));
        setLocalLoading(false);
      })
      .catch((error) => {
        console.log(error, "!!!!");
        throw new Error("Couldn't load the current anime data.");
      });
  };

  const tryRequest = () => {
    setTimeout(() => {
      if (!animeList) {
        localFetch().then(() => setLoading(false));
      }
    }, 5000);
  };

  useEffect(() => {
    setLoading(true);

    localFetch();
    tryRequest();
    if (!stateName) {
      setName(name);
    }
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
      <Link style={{ alignSelf: "center" }} className="btn btn-home" to={"/"}>
        back home
      </Link>
    </section>
  );
};

export default SingleAnime;
