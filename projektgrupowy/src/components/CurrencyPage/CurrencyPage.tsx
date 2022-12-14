import { useState, useEffect } from "react";
import axios from "axios";
import ExchangeInput from "./ExchangeInput";

interface CurrencyConverter {
  amount1: number;
  amount2: number;
  currency1: string;
  currency2: string;
}

const CurrencyConverter: React.FC<CurrencyConverter> = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get("https://api.exchangerate.host/latest").then((response) => {
      setRates(response.data.rates);
    });
  }, []);

  useEffect(() => {
    if (!!rates) {
      const init = function init() {
        handleAmount1Change(1);
      };
      init();
    }
  }, [rates]);

  function handleAmount1Change({ amount1 }: CurrencyConverter) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount1(amount1);

    function handleCurrency1Change({ currency1 }: CurrencyConverter) {
      setAmount2((amount1 * rates[currency2]) / rates[currency1]);
      setCurrency1(currency1);
    }

    function handleAmount2Change({ amount2 }: CurrencyConverter) {
      setAmount1((amount2 * rates[currency1]) / rates[currency2]);
      setAmount2(amount2);
    }

    function handleCurrency2Change({ currency2 }: CurrencyConverter) {
      setAmount1((amount2 * rates[currency1]) / rates[currency2]);
      setCurrency2(currency2);
    }

    return (
      <div>
        <h1>Currency Converter</h1>
        <ExchangeInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <ExchangeInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    );
  }
};

export default CurrencyConverter;
