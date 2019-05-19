// The entry file of your WebAssembly module.
let examplevar: i32 = 0;

export function add(a: i32, b: i32): i32 {
  examplevar++;
  return a + b;
}

export function multiply(a: i32, b: i32): i32 {
  examplevar++;
  return a * b;
}

export function subtract(a: i32, b: i32): i32 {
  examplevar++;
  return a - b;
}

export function divide(a: i32, b: i32): i32 {
  examplevar++;
  return a / b;
}

export function fib(num: i32): i32 {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

export function getAnalytics(): i32 {
  return examplevar;
}
