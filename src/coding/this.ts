interface User2 {
    name: string;
}

const Sam: User2 = {
    name: 'Sam'
}

function showName(this:User2){ //this의 타입을 정할 때 다음처럼 사용한다.
    console.log(this.name);
}

const aaa = showName.bind(Sam);
aaa();





interface User3{
    name: string;
    age: number;
}


//함수 오버로드를 사용한다.
function join(name: string, age: string): string;
function join(name: string, age: number): User3;

function join(name:string, age:number | string) :User3 | string{
    if(typeof age === 'number') {
        return {
            name,
            age,
        }
    } else {
        return '나이는 숫자로 입력해주세요.';
    }
}


const sam: User3 = join('Sam',30); //sam이 string을 반환할 수도 있기 때문에 에러발생 -> 함수 오버로드를 이용해 해결
const jane: string = join('jane','30');