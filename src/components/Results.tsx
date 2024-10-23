import UserInputType from "../model/UserInputType";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ input }: { input: UserInputType }) {
  const resultsData = calculateInvestmentResults(input);

  if (!(input.duration > 0)) {
    return <p>Please enter a duration greater than 0.</p>;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
        2
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInvestment =
            input.initialInvestment + yearData.annualInvestment * yearData.year;
          const totalInterest = yearData.valueEndOfYear - totalInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
