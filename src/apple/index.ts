//tsc -w 명령어 터미널에 입력시 자동으로 변경시마다 컴파일됨.
let 이름 :string = 'kim';

let obj : {
    a :string,
    b? :number // ? -> 옵션
};

obj = {
    a: 'a',
    b: 123
}

// obj = {
//     a: 'a',
//     b: '123' 에러 발생
// }

let 이름2 :string[] = ['kim', 'park'];


let 이름3 : string | number = 'kim';  //string 혹은 number

type 내타입 = string | number;

let 이름4 : 내타입 = 123;


function 함수(x : number) : number{1
    return x * 2
}

type Member = [number, boolean];
let john:Member = [1, true];


type Member2 = {
    [key :string] : string, //글자로된 모든 object 속성의 탁입은 string
}


