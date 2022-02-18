import React from "react";
import alfa from '../assets/images/AlfaRomeo.png';
import alpha from '../assets/images/AlphaTauri.jpg';
import alpine from '../assets/images/Alpine.jpg';
import aston from '../assets/images/AstonMartin.png';
import ferrari from '../assets/images/Ferrari.jpg';
import haas from '../assets/images/Haas.jpg';
import mclaren from '../assets/images/Mclaren.jpg';
import mercedes from '../assets/images/Mercedes.jpg';
import redbull from '../assets/images/Redbull.jpg';
import williams from '../assets/images/Williams.jpg';



const About = () => {
  return (
    <div className="about">
      <header className="about-title">About</header>
      <p className="about-descript">
        <span>Formula One</span> or <span>Formula 1 </span> was officially established in 1950.
         <br /> This league is regarded as the highest class of international
        racing for open-wheel single-seater racing cars. This premiere form of
        racing consists of a series of races (known as Grands
        Prix) taking place all over the globe. The word <span>formula</span> refers to the set of rules to which
        all participants' cars must conform.
      </p>
      <div className="about-teams">
        <h2 className="about-teams-title">Teams</h2>
        <div className="about-teams-grid">
          <div className="team"><a href="https://www.sauber-group.com/motorsport/formula-1/"><img src={alfa} alt="" /></a></div>
          <div className="team"><a href="https://scuderia.alphatauri.com/en/"><img src={alpha} alt="" /></a></div>
          <div className="team"><a href="https://www.alpinecars.com/en/formula-1/news/"><img src={alpine} alt="" /></a></div>
          <div className="team"><a href="https://www.astonmartinf1.com/en-GB/"><img src={aston} alt="" /></a></div>
          <div className="team"><a href="https://www.ferrari.com/en-EN/formula1"><img src={ferrari} alt="" /></a></div>
          <div className="team"><a href="https://www.haasf1team.com/"><img src={haas} alt="" /></a></div>
          <div className="team"><a href="https://www.mclaren.com/racing/"><img src={mclaren} alt="" /></a></div>
          <div className="team"><a href="https://www.mercedesamgf1.com/en/"><img src={mercedes} alt="" /></a></div>
          <div className="team"><a href="https://www.redbullracing.com/int-en"><img src={redbull} alt="" /></a></div>
          <div className="team"><a href="https://www.williamsf1.com/"><img src={williams} alt="" /></a></div>
        </div>
      </div>
    </div>
  );
};

export default About;
