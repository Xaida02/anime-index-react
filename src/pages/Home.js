import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import AnimeList from "../components/AnimeList";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <AnimeList />
    </main>
  );
};

export default Home;
