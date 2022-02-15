import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home/HomePage";

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
  const [selectedYear, setSelectedYear] = useState('');
  const [dataType, setDataType] = useState('');

  // Use Effect runs API call; API call takes in two user inputs: 1)Data Type, 2) Year; useEffect is set to track state variable changes to: selectedYear and dataType
  // Conditional checks to make sure state variables are not empty strings, and then runs the API Call.
  useEffect(() => {
    const apiFetch = async (userYearRequest, userTypeRequest) => {
      const response = await fetch(
        `https://ergast.com/api/f1/${userYearRequest}/${userTypeRequest}.json`
      );
      const data = await response.json();

      // console.log(data);
    };
    if(selectedYear !== '' && dataType !== ''){
      apiFetch(selectedYear, dataType);
    }
  },[selectedYear,dataType]);

  const updateDataType = (dataQuery) => {
    console.log("Data passed up:", dataQuery);
    setDataType(dataQuery);
    console.log("data Type:", dataType);
  }

  const updateYear = (yearSelected) => {
    console.log("Year passed up:", yearSelected);
    setSelectedYear(yearSelected);
    console.log("Selected Year:", selectedYear);
  }

  return (
  <div>
    <Home handleSelectedYear={updateYear} handleSelectedDataType={updateDataType}/>
  </div>
  );
}

export default App;
