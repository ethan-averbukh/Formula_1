import React, { useState } from "react";
import imageToGP from "../imageToGp";
import {Table } from 'react-bootstrap';
/*
 Receives an array of data based on user Request: 

*/

const Table = ({ driverInfo, raceInfo }) => {
  //const [isSelected, setIsSelected] = useState("");
  let driverInfoLabels = [];
  let raceInfoLabels = [];
  let circuitImage = "";
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
          <img src={circuitImage} alt="circuit track" />
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
    <div id="table">
      <div className="race-info">{raceInfoLabels}</div>
      <div className="driver-info">{driverInfoLabels}</div>
    </div>
  );
};

export default Table;
