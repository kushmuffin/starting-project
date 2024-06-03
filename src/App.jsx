import { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import Chart from "./components/Chart.jsx";

function App() {
  // 初始值
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 30000,
    expectedReturn: 6,
    duration: 20,
  });
  const [comparisonInput, setComparisonInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 800,
    expectedReturn: 5,
    duration: 20,
  });

  // hook -- useState
  const [resultsData, setResultsData] = useState([]);
  const [comparisResultsData, setComparisonResultsData] = useState([]);

  // 處理輸入的值
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      const updatedUserInput = {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
      // 如果 inputIdentifier 是 duration，同時更新 comparisonInput 的 duration
      if (inputIdentifier === "duration") {
        setComparisonInput((prevComparisonInput) => ({
          ...prevComparisonInput,
          duration: +newValue,
        }));
      }
      return updatedUserInput;
    });
  }
  function handleChangeComparison(inputIdentifier, newValue) {
    setComparisonInput((prevComparisonInput) => {
      return {
        ...prevComparisonInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const handleResultsChange = useCallback((newResultsData) => {
    setResultsData(newResultsData);
  }, []);
  const handleComparisonResultsChange = useCallback(
    (newComparisonResultsData) => {
      setComparisonResultsData(newComparisonResultsData);
    },
    []
  );

  const inputIsValid = userInput.duration >= 1;
  const inputIsValidCompairs = comparisonInput.duration >= 1;

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
      {inputIsValid && inputIsValidCompairs ? (
        <>
          <Chart data={resultsData} comparisonData={comparisResultsData} />
          <Results
            input={userInput}
            onResultsChange={handleResultsChange}
            comparisInput={comparisonInput}
            onComparisResultsChange={handleComparisonResultsChange}
          />
        </>
      ) : (
        <p className="center">Please only enter positive number</p>
      )}
      {/* <Chart type='bar' data={ } options={""} /> */}
    </>
  );
}

export default App;
