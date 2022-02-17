import React, { useState } from "react";
import imageToGP from "../imageToGp";

/*
 Receives an array of data based on user Request: 

*/

const Carousel = ({ driverInfo, raceInfo }) => {   
  //const [isSelected, setIsSelected] = useState("");
  let driverInfoLabels = [];
  let raceInfoLabels = [];
  let circuitImage = '';
  if (driverInfo !== []) {
    driverInfoLabels = driverInfo.map((driver, index) => {
      return (
        <label className="card" htmlFor={`item-${index}`} key={driver.driverId}>
          <img src="" alt="" />
          <p>
            {driver.givenName} {driver.familyName}
          </p>
          <p>{driver.permanentNumber}</p>
          {/* <p>{drivers current Team}</p> */}
        </label>
      );
    });
  }
  if (raceInfo !== []) {
    raceInfoLabels = raceInfo.map((race, index) => {
    // Function which returns image url based on race name.
      circuitImage = imageToGP(race.raceName);
   
      return (
        <label className="card" htmlFor={`item-${index}`} key={index}>
          <img src={require(circuitImage)} alt="circuit track" />
          <p>{race.raceName}</p>
          <p>{race.Circuit.Location.country}</p>
          <p>
            {race.date} {race.time}
          </p>
        </label>
      );
    });
  }
  return (
    <div id="carousel">
        {/* <input type="radio" name="slider" id="item-1" />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <input type="radio" name="slider" id="item-4" />
        <input type="radio" name="slider" id="item-5" /> */}
        <div className="race-info">{raceInfoLabels[0]}</div>
        {/* <div className="driver-info">{driverInfo && driverInfoLabels}</div> */}
    </div>
  );

  
};

export default Carousel;
