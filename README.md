# Project Overview



## Project Links
------

[Live Site](https://ethan-averbukh.github.io/Formula_1/)  




## Project Description

This website utilizes a Formula 1 API to deliver up to date data about Formula 1. User will be able to request for upcoming schedule, race track images, race results, and current drivers.

## API

[Formula 1 API](http://ergast.com/mrd/)



```
const response = await fetch("https://ergast.com/api/f1/2022.json");  

0: {season: '2022', round: '1', url: 'https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix', raceName: 'Bahrain Grand Prix', Circuit: {…}, …}
1: {season: '2022', round: '2', url: 'https://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix', raceName: 'Saudi Arabian Grand Prix', Circuit: {…}, …}
2: {season: '2022', round: '3', url: 'https://en.wikipedia.org/wiki/2022_Australian_Grand_Prix', raceName: 'Australian Grand Prix', Circuit: {…}, …}
3: {season: '2022', round: '4', url: 'https://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix', raceName: 'Emilia Romagna Grand Prix', Circuit: {…}, …}
4: {season: '2022', round: '5', url: 'https://en.wikipedia.org/wiki/2022_Miami_Grand_Prix', raceName: 'Miami Grand Prix', Circuit: {…}, …}
5: {season: '2022', round: '6', url: 'https://en.wikipedia.org/wiki/2022_Spanish_Grand_Prix', raceName: 'Spanish Grand Prix', Circuit: {…}, …}
6: {season: '2022', round: '7', url: 'https://en.wikipedia.org/wiki/2022_Monaco_Grand_Prix', raceName: 'Monaco Grand Prix', Circuit: {…}, …}
7: {season: '2022', round: '8', url: 'https://en.wikipedia.org/wiki/2022_Azerbaijan_Grand_Prix', raceName: 'Azerbaijan Grand Prix', Circuit: {…}, …}
8: {season: '2022', round: '9', url: 'https://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix', raceName: 'Canadian Grand Prix', Circuit: {…}, …}
9: {season: '2022', round: '10', url: 'https://en.wikipedia.org/wiki/2022_British_Grand_Prix', raceName: 'British Grand Prix', Circuit: {…}, …

```


## Wireframes

------
[Desktop](https://imgur.com/7D12ZMW)  
[Mobile](https://imgur.com/F89h5gl)  
[Components](https://imgur.com/ytDeE3s)  



### MVP


| Component                    | Priority | Estimated Time | Time Invested | Actual Time |
|:------------------------------:|:----------:|:----------------:|:----------------:|:-------------:|
| Components Basic Structure   | H        | 1hr            | 2hr             | hr          |
| API data retrieval           | H        | 2hr            | 5hr             | hr          |
| Pass API Data to Components  | H        | 3.5hr          | 10hr             | hr          |
| User Input Fields for Search | H        | 5hr            | 7hr             | hr          |
|  Buttons and handlers        | H        | 3hr            | 1hr             | hr          |
| CSS                          | H        | 25hr           | 40+hr             | hr          |
| Routing                      | H        | 2hr            | .5hr             | hr          |
| Total                        | H        | 41.5hr         | 65.5hr             | hr          |



### PostMVP

| Component                         | Priority | Estimated Time | Time Invetsted | Actual Time |
|-----------------------------------|----------|----------------|----------------|-------------|
| Wider range of Data queries       | H        | 2hr            | hr             | hr          |
| Pass API Data to Components  (From Wider Range)       | H        | 7hr            | hr             | hr          |
| Drop Down Menu for type of Search | H        | 5hr            | hr             | hr          |
|  Buttons and handlers             | H        | 3hr            | hr             | hr          |
| CSS                               | H        | 10hr           | hr             | hr          |
| Total                             | H        | 27hr           | hr             | hr          |



## Additional Libraries

Use of the react-boostrap library for styling purposes:  (https://react-bootstrap.github.io/)
Use of the font-awesome library for any icons:  (https://fontawesome.com/)
Use of the google fonts library for fonts:  (https://fonts.google.com/)


## Code Snippet

```javascript
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
```

## Issues  

1) Custom carousel display proved to be more work than expected and was scrapped for a more static table display.  ()

2) CSS responsiveness at different breakpoints not exact. Spacing between some elements is a little off.

3) Selection from the menu's on the first selection triggers what appears to be a re-render of the entire application.
   1) Updated: On section re-renders, sizing changes causing page to jump around.

4) Contact form not sending data to excel sheet.

5) Home page not displaying until Home Link is clicked. Possibly due to styling routing issue 