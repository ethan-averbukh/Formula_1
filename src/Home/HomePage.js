import React, { useState, useEffect } from "react";
import Select from "react-select";
import NavBar from "../Navigation/Navbar";
import Table from "../Table/Table";
import homeImage from '../assets/images/home_page.jpeg';

// Receives two event handlers which send the data back up to App to update State for API call.
const Home = ({ handleSelectedDataType, handleSelectedYear, driverInfo, raceInfo }) => {
  const [dataTypeShown, setDataTypeShown] = useState("");
  const [yearShown, setYearShown] = useState("");

  // PassedDown callback handlers invoked inside useEffect
  useEffect(() => {
    handleSelectedDataType(dataTypeShown);
    handleSelectedYear(yearShown);
  }, [dataTypeShown, yearShown]);

  // Arrays used for React Select Component options property
  const dataValues = [
    { label: "Race Schedule", value: "schedule" },
    { label: "Drivers", value: "drivers" },
  ];
  const yearValues = [
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
  ];

  // Handles the data
  const handleDataChange = (event) => {
    setDataTypeShown(event.value);
  };

  const handleYearChange = (event) => {
    setYearShown(event.value);
  };
  return (
    <div className="home-page">
      <div className="home-page-image">
        <div className="home-page-slogan">
          <h1 className="home-page-slogan-large">
            Don't Blink
          </h1>
          <h4 className="home-page-slogan-small">You Might Miss It</h4>
          <p className="home-page-descript">Your one stop shop for Formula One information.<br/> Use the menus below to choose the type of information you want and from which year.</p>
        </div>
      </div>
      <div className="home-page-select">
        <h3 className="info">Information</h3>
        <Select options={dataValues} onChange={handleDataChange} />
        <h3 className="year">Year</h3>
        <Select options={yearValues} onChange={handleYearChange} />
      </div>
      <div className="home-page-table">
        <Table driverInfo={driverInfo} raceInfo={raceInfo} />
      </div>
      
    </div>
  );
};

export default Home;
