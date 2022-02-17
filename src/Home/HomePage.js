import React, { useState, useEffect } from "react";
import Select from "react-select";
import NavBar from "../Navigation/Navbar";
import Carousel from "../Carousel/Carousel";

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
    {label: "Select Information", value: ""},
    { label: "Race Schedule", value: "schedule" },
    { label: "Drivers", value: "drivers" },
  ];
  const yearValues = [
    {label:"Choose a Year", value: ""},
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
    <div>
      <NavBar />
      <Select options={dataValues} onChange={handleDataChange} />
      <Select options={yearValues} onChange={handleYearChange} />
      <Carousel driverInfo={driverInfo} raceInfo={raceInfo} />
    </div>
  );
};

export default Home;
