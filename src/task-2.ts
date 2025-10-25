let currencyValue: "USD" | "EUR" | "UAH";
interface Currency {
  amount: number;
  currency: typeof currencyValue;
}
function convertCurrency({ amount, currency }: Currency): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 100, currency: "USD" });
