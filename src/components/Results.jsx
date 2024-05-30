import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({ input }) {
  console.log(input);
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  // console.log(resultsData);

  return (
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
  )
}