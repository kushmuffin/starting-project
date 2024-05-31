import { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import Chart from "./components/Chart.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 30000,
    expectedReturn: 6,
    duration: 20,
  });
  //comparison group
  const [comparisonInput, setComparisonInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 800,
    expectedReturn: 5,
    duration: 5,
  });

  const [resultsData, setResultsData] = useState([]);
  //comparison group
  const [comparisonResultsData, setComparisonResultsData] = useState([]);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }
  //comparison group
  function handleChangeComparison(inputIdentifier, newValue) {
    setComparisonInput((prevComparisonInput) => {
      return {
        ...prevComparisonInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  const handleResultsChange = useCallback((newResultsData) => {
    setResultsData(newResultsData);
  }, []);
  //comparison group
  const handleComparisonResultsChange = useCallback((newComparisonResultsData) => {
    setComparisonResultsData(newComparisonResultsData);
  }, []);

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <div className="userinput">
        <UserInput
          userInputInfo={userInput}
          onChange={handleChange}
          comparisonUserInputInfo={comparisonInput}
          onChangeComparison={handleChangeComparison}
        />
      </div>
      {/* {!inputIsValid && <p className="center">Please only enter positive number</p>} */}
      {inputIsValid ? (
        <>
          <Results
            input={userInput}
            onResultsChange={handleResultsChange}
            comparisInput={comparisonInput}
            onComparisResultsChange={handleComparisonResultsChange}
          />
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
