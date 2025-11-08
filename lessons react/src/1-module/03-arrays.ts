/**
 * Типізація масивів: тип[] та Array<тип>
 * Підказки методів та властивостей
 * Типізація масиву обєктів
 */

// const product: string[] = ['cherry', 'mango', 'apple'] -perwiu sposib tipizacii
const product: Array<string> = ["cherry", "mango", "apple"];

console.log(product);
//products. ts підкаже які методи можна використовувати для роботи з масивами

//масив обєктів
interface productsBasketType {
  title: string;
  price: number;
  isFavorite: boolean;
}

const productsBasket: productsBasketType[] = [
  {
    title: "lemon",
    price: 100,
    isFavorite: true,
  },
  {
    title: "apple",
    price: 50,
    isFavorite: true,
  },
  {
    title: "apelsin",
    price: 1200,
    isFavorite: false,
  },
  {
    title: "grape",
    price: 80,
    isFavorite: true,
  },
  {
    title: "cherry",
    price: 200,
    isFavorite: true,
  },
];

// productsBasket[0].price.
console.log(productsBasket);

// const fikteredProductsBasket = productsBasket.filter((product)=>{})
