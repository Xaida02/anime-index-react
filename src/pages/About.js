import React from "react";
import { social } from "../data";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title tobias">Xaida02</h1>
      <p className="about-paragraph">
        I've created this project using a free API in order to promote myself
        and my portfolio. This react-app makes use of multiple hooks and also
        two external libraries (react-router and react-icons).
        <br />
        If you're interested in my services and wish to contact me, please do
        so, I'm active in the following profiles.
      </p>
      <div className="profile-link">
        {social.map((item) => {
          const { id, url, icon, name } = item;
          return (
            <p className="link" title={`${name} profile`} key={id}>
              <a rel="noreferrer" target="_blank" href={url}>
                {icon}
              </a>
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default About;
