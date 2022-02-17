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
      <div className="home-page-image"><img src={homeImage} alt="Formula 1" /></div>
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
