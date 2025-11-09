let currencyValue: "USD" | "EUR" | "UAH";
interface Currency {
  amount: number;
  currency: typeof currencyValue;
}
function convertCurrency({ amount, currency }: Currency): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 100, currency: "USD" });

/**
 * Опис: Є функція, яка приймає суму (число) та тип валюти.

function convertCurrency({amount, currency}) {
  console.log(`Converting ${amount} to ${currency}`);
}

Завдання:

Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
Типізуйте повернення функції.
 */
