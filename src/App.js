import "./App.css";
import Card from "./components/Card";
import InputFields from "./components/InputFields";
import AgeDisplay from "./components/AgeDisplay";
import {useCallback, useState} from "react";


function App() {

    const [inputValues, setInputValues] = useState(
        {
            day: null,
            month: null,
            year: null
        }
    )


    const caluclateDate = useCallback ((values) => {
        const now = new Date();
        const birthDate = new Date(values.year, values.month - 1, values.day);
        const diffTime = Math.abs(now - birthDate);
        const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
        const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
        const diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));

        setInputValues(prev => ({
            day: diffDays,
            month: diffMonths,
            year: diffYears
        }))
        console.log(inputValues);


    }, [inputValues, setInputValues])

    return <Card>
        <InputFields onSubmit={caluclateDate}/>
        <AgeDisplay data={inputValues}/>
    </Card>;
}

export default App;
