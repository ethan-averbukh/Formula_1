import React, {useState} from 'react';
import Select from 'react-select';

const Home = ({handleSelectedDataType, handleSelectedYear}) => {
    const [dataTypeShown, setDataTypeShown] = useState('');
    const [yearShown, setYearShown] = useState('');
    const dataValues = [
        {label: "Race Schedule", value: "schedule"},
        {label: "Drivers", value: "drivers"}   
    ];
    const yearValues = [
        {label: "2021", value: "2021"},
        {label: "2022", value: "2022"}
    ];

    const handleDataChange = async (event) => {
        await setDataTypeShown(event.value);
        console.log("Data shown:", dataTypeShown);
        handleSelectedDataType(dataTypeShown);

    }
    const handleYearChange = async (event) => {
        await setYearShown(event.value);
        console.log("year shown:", yearShown);
        handleSelectedYear(yearShown);
        
    }

    return (
        <div>
            <Select options={dataValues} onChange={handleDataChange}/>
            <Select options={yearValues} onChange={handleYearChange}/>
        </div>
    )
}


export default Home;