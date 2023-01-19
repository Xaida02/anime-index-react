import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section style={{ paddingTop: "2vh" }} className="section error-page">
      <div className="error-container">
        <h1 className="section-title">404 page not found</h1>
        <Link className="btn btn-home" to={"/"}>
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
