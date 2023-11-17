type TestArray = Array<string>; // [string, string, string]
type TestArray2 = number[]; //[number, number, number]
type TestArray3 = [boolean, string, number];

const arr: TestArray = ['Test', 'Test2', 'Test3'];
const arr2: TestArray2 = [1, 2];
const arr3: TestArray3 = [true, 'String', 10];

console.log(arr3)