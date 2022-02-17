import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/HomePage";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Carousel from "./Carousel/Carousel";

// MVP: User will be able to select year 2021 2022 and schedule, standings, and circuit tracks.

/* 
  How will the data look when returned?
   I want the data to be presented in the carousel, can this be independent of what data is requested?

   User requests:
   1) Schedule
      a) The Date of the race
      b) Time of race start
      c) The location of the race (name)
      d) An image of the track being raced on.
   2) Drivers
    a) An image of the driver
    b) Name of the driver
    c) Team they are apart of.

*/

function App() {
  const [selectedYear, setSelectedYear] = useState("");
  const [dataType, setDataType] = useState("");
  const [races, setRaces] = useState([]);
  const [drivers, setDrivers] = useState([]);

  /*  Use Effect runs API call; API call takes in two user inputs: 1)Data Type, 2) Year; useEffect is set to track state variable changes to: selectedYear and dataType
     Conditional checks to make sure state variables are not empty strings, and then runs the API Call.
     API only requires year when schedule data is requested. 
          Conditional checks and runs different url if user selects Race Schedule.
  */
  useEffect(() => {
    const apiFetch = async (userYearRequest, userTypeRequest) => {
      if (userTypeRequest === "schedule") {
        const response = await fetch(
          `https://ergast.com/api/f1/${userYearRequest}.json`
        );
        const data = await response.json();
        setRaces(data.MRData.RaceTable.Races);
      } else {
        const response = await fetch(
          `https://ergast.com/api/f1/${userYearRequest}/${userTypeRequest}.json`
        );
        const data = await response.json();
        setDrivers(data.MRData.DriverTable.Drivers);
      }
    };
    if (selectedYear !== "" && dataType !== "") {
      apiFetch(selectedYear, dataType);
    }
  }, [selectedYear, dataType]);

  // Param: dataQuery --> This parameter is the user's choice for what information he wants. Received from Home Component;
  // updateDataType passed into Home Component as reference.
  const updateDataType = (dataQuery) => {
    setDataType(dataQuery);
  };

  // Param: yearSelected --> This parameter is the user's choice for what year he wants. Received from Home Component;
  // updateYear passed into Home Component as reference.
  const updateYear = (yearSelected) => {
    setSelectedYear(yearSelected);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSelectedYear={updateYear}
              handleSelectedDataType={updateDataType}
              driverInfo={drivers}
              raceInfo={races}
            />
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
