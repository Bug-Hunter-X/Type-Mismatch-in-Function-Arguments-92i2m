function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, Number('2'));
console.log(result); // Output: 3

//Alternative Solution using type assertion (less safe):
let result2 = add(1, <number>('2')); //Type Assertion
console.log(result2); // Output: 3