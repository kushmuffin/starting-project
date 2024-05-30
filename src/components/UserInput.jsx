export default function UserInput({ onChange, userInputInfo }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>初始投資</label>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputInfo.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label>年投資金額</label>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInputInfo.annualInvestment}
            onChange={(event) => onChange('annualInvestment', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>年化報酬率</label>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInputInfo.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>投資期間(/年)</label>
          <label>Duration(per annum)</label>
          <input
            type="number"
            required
            value={userInputInfo.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  )
}