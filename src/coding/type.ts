
let car:string = 'BMW';
let age:number = 30;
let isTrue:boolean = true;
//배열타입
let a:number[] = [1,2,3];
let b:Array<number> = [1,2,3];
let week1:string[] = ['a','b','c'];
let week2:Array<string> = ['a','b','c'];
// 여러가지 형을 배열로 선언할 수도 있다.
let c:[string, number] = ['a',123];
c[0].toLowerCase();
// c[1].toLowerCase(); //에러


// void
function sayHello():void {
    console.log('Hello');
}
//Error를 반환하는 타입에 Error를 쓴다.
function showError():never {
    throw new Error();
}
//영원히 끝나지 않는 타입에 never를 쓴다.
function infLoop():never{
    while(true) {};
}

//enum
enum Os {
    Window,
    Ios,
    Android
}

//enum 타입만 사용할 수 있도록
let myOs:Os;

// myOs = 'aa'; //에러발생

//null, undefined
let aa:null = null;
let bb:undefined = undefined;


