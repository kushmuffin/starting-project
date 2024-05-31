import { calculateInvestmentResults, formatter } from "../util/investment.js"
import React, { useEffect, useState } from "react";

export default function Results({ input, onResultsChange, comparisInput, onComparisResultsChange }) {
  const [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    const results = calculateInvestmentResults(input);
    console.log(results)
    setResultsData(results);
    onResultsChange(results);
  }, [input, onResultsChange]); // 只在 input 或 onResultsChange 改變後才再次計算


  const [comparisResultsData, setComparisResultsData] = useState([]);

  useEffect(() => {
    const comparisResults = calculateInvestmentResults(comparisInput);
    console.log(comparisResults)
    setComparisResultsData(comparisResults);
    onComparisResultsChange(comparisResults);
  }, [comparisInput, onComparisResultsChange]); // 只在 input 或 onComparisResultsChange 改變後才再次計算

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>年度/Year</th>
            <th>總資產/Investment Value</th>
            <th>年度利息/Interest (Year)</th>
            <th>總利息/Total Interest</th>
            <th>投入本金/Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map(yearData => {
            const initialInvestment =
              resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
            const totalInterest =
              yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return <tr key={yearData.year} >
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          })}
        </tbody>
      </table>
      {/* comparison group */}
      <table id="comparison-result">
        <thead>
          <tr>
            <th>年度/Year</th>
            <th>總資產/Investment Value</th>
            <th>年度利息/Interest (Year)</th>
            <th>總利息/Total Interest</th>
            <th>投入本金/Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {comparisResultsData.map(yearData => {
            const comparisInitialInvestment =
              comparisResultsData[0].valueEndOfYear - comparisResultsData[0].interest - comparisResultsData[0].annualInvestment;
            const comparisTotalInterest =
              yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - comparisInitialInvestment;
            const comparisTotalAmountInvested = yearData.valueEndOfYear - comparisTotalInterest;

            return <tr key={yearData.year} >
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(comparisTotalInterest)}</td>
              <td>{formatter.format(comparisTotalAmountInvested)}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}