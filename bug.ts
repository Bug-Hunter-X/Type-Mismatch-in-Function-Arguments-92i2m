function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, '2'); //Type Error, because it expects two numbers
console.log(result); //This will never run because of the error above