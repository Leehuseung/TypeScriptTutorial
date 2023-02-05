
let user1:object;

user1 = {
    name : 'xx',
    age : 30
}
// console.log(user.name); // 에러 발생. object에는 name이 없다.




type Score = 'A' | 'B' | 'C' | 'F';
interface User {
    name : string;
    age : number;
    gender? : string;  //optional 로 하려면 ?가 필요함.
    readonly birthYear : number;
    [grade:number] : Score;
}

let user2 : User = {
    name : 'age',
    age : 30,
    birthYear : 2000,
    // 1: Score.a, //grade 변수를 number로 선언해서 매번 1,2,3,4 이런 키값을 선언안하고 대체할 수 있다.
    // 2: Score.b,
    // 3: 'z' //Score로 타입을 선언해 줬기 때문에 다른 값을 입력할 수 없다.
}
user2.age = 10;
// user2.gender = 'a'; // user2에서 선언하지 않았기 때문에 에러 발생.
// user2.birthYear = 1990; // readonly 키워드 때문에 에러 발생.

console.log(user2.age);



//interface를 이용한 함수 정의
interface Add {
    (num1:number, num2:number): number;
}

const add : Add = function (x,y) { //Add 인터페이스와 형태가 비슷해야한다.
    return x+y;
}

add(10,20);
// add(10,20,30); // 에러발생

interface IsAdult {
    (age:number):boolean;
}

const ab :IsAdult = (age) => {
    return age > 19;
}



//class 정의
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class BMW implements Car {
    color = "red";
    constructor(c:string) {
        this.color = c;
    }
    wheels = 4;
    start(): void {
        console.log('go..');
    }
}

const bmw = new BMW('green');
console.log(bmw);
bmw.start();

//extends
interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz: Benz = {
    door: 5,
    stop() {
        console.log('stop')
    },
    color:'black',
    wheels:4,
    start() {
        console.log('st');
    }

}


//extends는 여러개도 가능하다.
interface Toy {
    name : string;
}

interface ToyCar extends Car, Toy {
    price : number;
}


