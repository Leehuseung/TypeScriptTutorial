
interface User8 {
    id: number;
    name: string;
    age: number;
    gender: 'm' | 'f';
}

type UserKey = keyof User8;  // 'id' | 'name' | 'age' | 'gender'   와같다.
const uk:UserKey = 'id'; // User 인터페이스의 키값중 하나를 입력하면 에러가 사라진다.



//Partial<T>
interface User9 {
    id: number;
    name: string;
    age: number;
    gender: 'm' | 'f';
}

//Partial 사용시 다음과 같다.
// interface User9 {
//     id?: number;
//     name?: string;
//     age?: number;
//     gender?: 'm' | 'f';
// }

let admin: Partial<User9> = {
    id: 1,
    name: 'Bob',
}

//Requred<T>는 모든 프로퍼티를 필수로 바꿔준다.
interface User10 {
    id: number;
    name: string;
    age?: number;
}

// let admin10: Required<User10> = { // 에러발생
//     id: 1,
//     name: 'Bob'
// }

//Readonly<T>는 읽기전용으로 변경한다.
interface User11 {
    id: number;
    name: string;
    age?: number;
}

let admin11: Readonly<User11> = {
    id: 1,
    name: 'Bob'
}
// admin.id = 'a'; //변경시 오류 발생



//Record<K,T>
// interface Score{
//     '1' : 'A' | 'B' | 'C' | 'D';
//     '2' : 'A' | 'B' | 'C' | 'D';
//     '3' : 'A' | 'B' | 'C' | 'D';
//     '4' : 'A' | 'B' | 'C' | 'D';
// }

type Grade = '1'|'2'|'3'|'4';

enum Score {a = 'A', b = 'B', c = 'C', d = 'D'}
const score: Record<Grade, Score> ={
    1: Score.a,
    2: Score.c,
    3: Score.b,
    4: Score.d
}


//Pick<T,K>
interface User12 {
    id: number;
    name: string;
    age: number;
    gender: 'M' | 'W';
}

//id와 name만 가져와서 사용할 수 있다.
const admin12: Pick<User12, 'id' | 'name'> = {
    id: 0,
    name: 'Bob'
}

//Omit<T,K>
interface User13 {
    id: number;
    name: string;
    age: number;
    gender: 'M' | 'W';
}

//id와 name만 가져와서 사용할 수 있다.
const admin13: Omit<User13, 'age' | 'gender'> = {  //age와 gender를 제외하고 id, name 만 사용한다.
    id: 0,
    name: 'Bob'
}

//Exclude<T1,T2> T1타입중 T2타입과 겹치는 타입을 제외시킨다.
//Omit과 다른점은 타입을 제외시킨다는점..
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; //boolean만 남게된다.


//NonNullable<Type>
//null, undefined 함께 제회
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; //string, void만 남게된다.

