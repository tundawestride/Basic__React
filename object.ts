type TestObject = {
    id: number;
    value: string;
    status: boolean;
    power?: 'ON' | "OFF"
}

const obj: TestObject = {
    id: 1,
    value: 'Test',
    status: true,
    power: 'ON',
};

const obj2: TestObject = {
    id: 2,
    value: 'Test2',
    status: false,
}

console.log(obj);
console.log(obj2);