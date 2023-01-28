function getSize(arr: number[] | string[] | boolean[]):number {
    return arr.length;
}

const arr1 = [1,2,3];
getSize(arr1);

const arr2 = ['a','b','c'];
getSize(arr2);

const arr3 = [false, true, true];
getSize(arr3);

//위와 같은 상황에서 Generic으로 대체한다.
function getSize1<T>(arr: T[]): number {
    return arr.length;
}

getSize1(arr1);
getSize1(arr2);
getSize1(arr3);



interface Mobile1<T> {
    name: string;
    price: number;
    option: T;
}

// const m1:Mobile1<object> = {
const m1:Mobile1<{ color: string; coupon: boolean }> = {
    name: 's21',
    price:1000,
    option: {
        color:'red',
        coupon:false
    }
}

const m2:Mobile1<string> = {
    name: 's20',
    price:900,
    option: 'good'
}


interface User7 {
    name: string;
    age: number;
}
interface Car7 {
    name: string;
    color: string;
}
interface Book7 {
    price: number;
}
const user: User7 = { name: 'a', age: 10}
const car7: Car7 = { name: "bmw", color: "red" };
const book: Book7 = { price: 3000 };

//name이 있는 T를 받는다.
function showName<T extends { name: string }>(data: T): string {
    return data.name;
}
showName(user);
showName(car7);
// showName (book);   //name이 없으므로 에러 발생.