export default function UserInput({ onChange, userInputInfo }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputInfo.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)}
          />
        </p>
        <p>
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
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInputInfo.expectedInvestment}
            onChange={(event) => onChange('expectedInvestment', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
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