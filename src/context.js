import React, { useState, useContext, useEffect, useCallback } from "react";
// import { useCallback } from "react";

const url = "https://api.jikan.moe/v4/anime?q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [animeList, setAnimeList] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    await fetch(url + name)
      .then((response) => response.json())
      .then((apiData) => {
        setAnimeList(apiData.data);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error("Failed to load the data.", error);
      });
  }, [name]);

  useEffect(() => {
    console.log("Use effect called.");
    fetchData();
  }, [name, fetchData]);

  return (
    <AppContext.Provider
      value={{ name, setAnimeList, animeList, setName, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
