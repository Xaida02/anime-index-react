import React from "react";
import { Link } from "react-router-dom";

const Anime = ({ type, title, images, status }) => {
  return (
    <Link to={`/anime/${title}`} className="anime">
      <div className="img-container">
        <img
          className="item-img"
          src={images.jpg.large_image_url}
          alt={`${title} pic`}
        />
      </div>
      <div className="anime-footer">
        <h4 style={{ color: "#cfdcdf" }}>{type}</h4>
        <p
          style={{
            color: status === "Finished Airing" ? "#cccc76" : "#b3ffb3",
          }}
        >
          {status || "unknown"}
        </p>
        <button
          style={{ cursor: "pointer" }}
          onClick="window.scroll(0);"
          className="btn btn-primary btn-details"
          // to={`/anime/${title}`}
        >
          Info
        </button>
      </div>
      <h4 className="title" title={title}>
        {title.length < 29 ? title : title.substring(0, 30) + "..."}
      </h4>
    </Link>
  );
};

export default Anime;
