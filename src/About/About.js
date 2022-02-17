import React from "react";

const About = () => {
  return (
    <div className="about">
        <header className="about-title">About</header>
      <p className="about-descript">
        <span>Formula One</span> or <span>Formula 1</span> is one of the highest classes of international
        racing for open-wheel single-seater racing cars. This premiere form of
        racing began in 1950 and consists of a series of races known as Grands
        Prix. The world <span>formula</span> refers to the set of rules to which
        all participants' cars must conform
      </p>
      <div className="about-search-options">
        <div>
          Use the home page menu's to retrieve:
          <ul className="about-list-items">
            <li>Race Schedule</li>
            <li>Drivers Information</li>
          </ul>
          </div>
      </div>
    </div>
  );
};

export default About;
