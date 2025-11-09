interface createParams {
  name: string;
  age: number;
}
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
function createUser({ name, age }: createParams): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });

/**
 * function createUser({name, age}) {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

Завдання:

Типізуйте функцію повністю: параметри і повернення функції.
 */
