interface ExchangeInput {
  amount1: number;
  amount2: number;
  currency1: string;
  currency2: string;
}

const ExchangeInput = (props) => {
  return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
        onChange={(event) => props.onAmountChange(event.target.value)}
      />
      <select
        value={props.currency}
        onChange={(event) => props.onCurrencyChange(event.target.value)}
      >
        {props.currencies.map((currency: string[]) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default ExchangeInput;
