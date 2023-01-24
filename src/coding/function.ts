function add2(num1: number, num2: number) : number {
    return num1 + num2;
}
//리턴이 없다면 void
function add3(num1: number, num2: number) : void {
    console.log(num1+num2)
}

//파라미터도 optional로 가능함.
function hello(name?: string) {
    return `Hello, ${name || 'world'}`;
}

const result = hello();
const result2 = hello('Sam');
// const result3 = hello(123); //에러발생

//매개변수의 디폴트값을 설정할 수 있다.
function hello2(name = 'World') {
    return `Hello, ${name || 'world'}`;
}


function hello3(name: string, age?: number): string { //age? , name 순서면 에러가 발생한다.. age인지 name인지 모른다.
// function hello3(age: number | undefined, name: string): string { //age를 앞에 사용하고 싶으면 다음처럼..
        if(age !== undefined) {
        return `Hello, ${name}. you are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}


function add4(...nums: number[]) { //배열형태로 받을 수 있다.
    return nums.reduce((result,num) => result + num, 0);
}

add4(1,2,3); //6
add4(1,2,3,4,5,6,7,8,9,10); //55






