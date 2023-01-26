//접근제한자 public, private #, proteced
//public 자식, 클래스 인스턴스에서 모두 접근 가능. 아무것도 표기하지 않으면 public임.
//protected - 자식 클래스에서 접근 가능
//private - 해당 클래스 내부에서만 접근 가능

class Car5 {
    color: string; //ts에서 클래스 작성시 멤버변수는 미리 선언해야 한다.
    name: string = 'car';
    // #name: string = 'car'; //#으로 private을 사용할 수도 있따.

    //static은 정적 멤버변수를 사용할 수 있다.
    static wheels: number = 4;

    constructor(color: string) {
    // constructor(public color: string) {  // 멤버변수 선언없이 사용할 때 public 키워드로 하면 에러 발생 안함.
    // constructor(readonly color: string) {// 멤버변수 선언없이 사용할 때 readonly 키워드로 하면 에러 발생 안함.
        this.color = color;
    }
    start() {
        console.log('start');
        // console.log(this.wheels); //에러발생 this가 아니라 class 명을 적는다.
        console.log(Car5.wheels);
    }
}

class BXW5 extends Car5 {
    constructor(color: string) {
        super(color);
    }
    showName(){
        console.log(super.name);  //super.name 이 private이라면 에러 발생
    }
}

const z4 = new Car5('red');

// console.log(z4.name);  name이 protected일 경우 에러 발생. 상속받은 클래스에서만 사용 가능.
// z4.name = 'vv' readonly일경우 에러 발생



//추상 클래스
abstract class Car6 {
    color: string;
    name: string = 'car';
    static wheels: number = 4;

    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log('start');
        console.log(Car5.wheels);
    }
    abstract  doSomething():void; // 상속받은 쪽에서 구현을 강제함.
}

// const car = new Car6(); //추상클래스는 new 키워드로 생성할 수 없다.

class BXW6 extends Car6 {
    constructor(color: string) {
        super(color);
    }
    showName(){
        console.log(super.name);
    }

    doSomething() {

    }
}