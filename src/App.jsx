import { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import Chart from "./components/Chart.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });

  const [resultsData, setResultsData] = useState([]);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  const handleResultsChange = useCallback((newResultsData) => {
    setResultsData(newResultsData);
  }, []);

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInputInfo={userInput} onChange={handleChange} />
      {/* {!inputIsValid && <p className="center">Please only enter positive number</p>} */}
      {inputIsValid ? (
        <>
          <Results input={userInput} onResultsChange={handleResultsChange} />
          <Chart data={resultsData} />
        </>
      ) : (
        <p className="center">Please only enter positive number</p>
      )}
      {/* <Chart type='bar' data={ } options={""} /> */}
    </>
  )
}

export default App
