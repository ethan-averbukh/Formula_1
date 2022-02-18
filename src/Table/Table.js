import React, { useState } from "react";
import {Table } from 'react-bootstrap';
/*
 Receives an array of data based on user Request: 

*/

const TableComponent = ({ driverInfo, raceInfo }) => {
  const [isRaceSelected, setIsRaceSelected] = useState('');
  const [isDriverSelected, setIsDriverSelected] = useState('');
  let driverInfoLabels = [];
  let raceInfoLabels = [];
  const raceInfoHeaders = [
    <th>#</th>,
    <th>Race Name</th>,
    <th>Location</th>,
    <th>Date</th>,
    <th>Time</th>,
    <th>Link</th>
  ]
  const driverInfoHeaders = [
    <th>First Name</th>,
    <th>Family Name</th>,
    <th>Number</th>,
    <th>Nationality</th>,
    <th>Date of Birth</th>,
    <th>Link</th>
  ]
  if (driverInfo !== []) {
    driverInfoLabels = driverInfo.map((driver, index) => {
      return (
        <tr key={index}>
        <td>
        {driver.givenName}
        </td>
        <td>
          {driver.familyName}
        </td>
        <td>
        {driver.permanentNumber}
        </td>
        <td>
          {driver.nationality}
        </td>
        <td>
          {driver.dateOfBirth}
        </td>
        <td>
          <a href={driver.url}>{driver.givenName} {driver.familyName}</a>
        </td>
      </tr>
      );
    });
  }

  if (raceInfo !== []) {
    raceInfoLabels = raceInfo.map((race, index) => {
      // Function which returns image url based on race name.

      return (
        <tr key={index}>
          <td>
            {race.round}
          </td>
          <td>
            {race.raceName}
          </td>
          <td>
          {race.Circuit.Location.country}
          </td>
          <td>
          {race.date}
          </td>
          <td>
          {race.time}
          </td>
          <td>
            <a href={race.url}>{race.raceName}</a>
          </td>
        </tr>
      );
    });
  }
  return (
    <Table id="table">
      <thead>
        <tr>
          {isRaceSelected && raceInfoHeaders}
          {isDriverSelected && driverInfoHeaders}
        </tr>
      </thead>
      <tbody>
        {raceInfoLabels}
        {driverInfoLabels}
      </tbody>
      {/* <div className="driver-info">{driverInfoLabels}</div> */}
    </Table>
  );
};

export default TableComponent;
