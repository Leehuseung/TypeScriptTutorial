const userName1 = 'Bob';
let userName2 = 'Tom';

// userName2 = 3;  // 에러 발생

type Job = 'police' | 'developer' | 'teacher';

interface User6 {
    name: string;
    job: Job;
}

const user6: User6 = {
    name: 'Bob',
    job: 'developer' //job property는 Job type만 쓸 수 있다.
}

interface HighSchoolStudent {
    name: number | string;
    grade: 1 | 2 | 3;
}


//Union Types
interface Car3 {
    name: 'car';
    color: string;

    start(): void;
}

interface Mobile {
    name: 'mobile';
    color: string;

    call(): void;
}

// function getGift(gift:Car3 | Mobile){
//     console.log(gift.color); // 둘다 color가 있기 때문에 에러발생 안함
//     gift.start(); // car에만 있기 때문에 에러 발생
// }

function getGift(gift: Car3 | Mobile) {
    console.log(gift.color); // 둘다 color가 있기 때문에 에러발생 안함
    if (gift.name === 'car') { //식별 가능한 union 타입이라고 한다.
        gift.start(); // car에만 있기 때문에 에러 발생
    } else {
        gift.call();
    }
}


//교차타입
interface Car4 {
    name: string;

    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}
//필요한 모든 기능을 갖는 하나의 타입이 나온다.
const toyCar: Toy & Car4 = {
    color: "blue",
    name: "타요",
    price: 1000,
    start(): void {
        console.log()
    }
}

