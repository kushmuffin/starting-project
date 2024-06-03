export default function UserInput({
  onChange,
  userInputInfo,
  onChangeComparison,
  comparisonUserInputInfo,
}) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>初始投資</label>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInputInfo.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>年投資金額</label>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInputInfo.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
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
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>投資期間(/年)</label>
            <label>Duration(per annum)</label>
            <input
              type="number"
              required
              value={userInputInfo.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
      <section id="user-input">
        <div className="input-group">
          {/* 對照組 */}
          <p>
            <label>初始投資</label>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={comparisonUserInputInfo.initialInvestment}
              onChange={(event) =>
                onChangeComparison("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>年投資金額</label>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={comparisonUserInputInfo.annualInvestment}
              onChange={(event) =>
                onChangeComparison("annualInvestment", event.target.value)
              }
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
              value={comparisonUserInputInfo.expectedReturn}
              onChange={(event) =>
                onChangeComparison("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>投資期間(/年)</label>
            <label>Duration(per annum)</label>
            <input
              type="number"
              required
              disabled
              value={userInputInfo.duration}
              onChange={(event) =>
                onChangeComparison("duration", event.target.value)
              }
            />
          </p>
        </div>
      </section>
    </>
  );
}
