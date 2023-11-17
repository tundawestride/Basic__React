//Binding
let b: number = 10;
b = 20;
console.log(b);

//function
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(1, 2));

//Generic
function addToArray<A, B>(a: A, b: B) {
    return [a, b];
}
console.log(addToArray<number, string>(10, "Ten"))