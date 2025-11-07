/**
 * Union
 * Літеральні типи ('pending', 'shipped','delivered', 'canceled')
 */
let response: string | number = "success";
response = 404;

//response =true;- Error

let value: "small" | "medium" | "large" = "medium";
console.log(value);
//value='test';- Error

type ContainerSize = "small" | "medium" | "large";

let containerValue: ContainerSize = "large";
4;
console.log(containerValue);
