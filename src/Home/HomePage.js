import React, { useState, useEffect } from "react";
import Select from "react-select";

// Receives two event handlers which send the data back up to App to update State for API call.
const Home = ({ handleSelectedDataType, handleSelectedYear }) => {
  const [dataTypeShown, setDataTypeShown] = useState("");
  const [yearShown, setYearShown] = useState("");

  // PassedDown callback handlers invoked inside useEffect
  useEffect(()=>{
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
  console.log("Data shown:", dataTypeShown);

  const handleYearChange = (event) => {
    setYearShown(event.value);
    
  };
  console.log("year shown:", yearShown);
  return (
    <div>
      <Select options={dataValues} onChange={handleDataChange} />
      <Select options={yearValues} onChange={handleYearChange} />
    </div>
  );
};

export default Home;
