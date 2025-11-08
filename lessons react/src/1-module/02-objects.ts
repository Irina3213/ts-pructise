/**
 * Типізація обєктів
 * Використання interface
 * Опціональні (?) та readonly поля
 */
// const product: { title: string; price: number; isFavourite: boolean } = {
//   title: "lemon",
//   price: 50,
//   isFavourite: true,
// };
// console.log(product);

interface ProductType {
  title: string;
  price: number;
  isFavourite: boolean;
}

const product: ProductType = {
  title: "lemon",
  price: 50,
  isFavourite: true,
};
console.log(product);

// product.price
// product.price.- pidkazye metodi, yaki mogna vikoristati

// product.test='test';-Error

interface StudentType {
  readonly studentName: string;
  course: string;
  time: number;
  isFavourite: boolean;
  avatar?: string;
}
const student: StudentType = {
  studentName: "Oleg",
  course: "React",
  time: 10,
  isFavourite: true,
};
const student2: StudentType = {
  studentName: "Olga",
  course: "JS",
  time: 8,
  isFavourite: true,
  avatar: "./image.jpg",
};
// student2.studentName = 'Tetyana';-Error-readonly-can't change
console.log(student);
console.log(student2);
