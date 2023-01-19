import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const { setName } = useGlobalContext();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <label className="search-label" htmlFor="">
          Search an Anime name
        </label>
        <div className="form-control">
          <input
            placeholder="Press enter"
            ref={inputRef}
            type="text"
            name="name"
            id="name"
          />
          <button className="submit-btn">
            <FaSearch />
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
