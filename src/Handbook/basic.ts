function basic() {

    const message = "Hello World!";

    /**
     * 이상적으로는, 코드를 실행하기 전에 이러한 버그를 미리 발견할 수 있는 도구가 있다면 좋을 것입니다.
     * TypeScript와 같은 정적 타입 검사기의 역할이 바로 그것입니다.
     * 정적 타입 시스템은 우리가 작성한 프로그램에서 사용된 값들의 형태와 동작을 설명합니다.
     * TypeScript와 같은 타입 검사기는 이 정보를 활용하여 프로그램이 제대로 작동하지 않을 때 우리에게 알려줍니다.
     */
    // message();
    // This expression is not callable.
    // Type 'String' has no call signatures.


    /**
     * 아래 코드를 보면, 인자로 전달된 객체가 호출 가능한 프로퍼티인 flip을 가져야만 위 함수가 잘 작동할 것이라는 것을 우리는 코드를 읽음으로써 알 수 있습니다.
     */
    // function fn(x) {
    //     return x.flip();
    // }



    const user = {
        name: "Daniel",
        age: 26,
    };

    /**
     * 비록 때로는 이로 인하여 표현의 유연성을 희생해야 하겠지만, 이렇게 함으로서 명시적인 버그는 아니지만 버그로 타당히 간주되는 경우를 잡아내는 데에 그 목적이 있습니다.
     */
    // user.location;

    /**
     * tsc 는 TypeScript 컴파일러이다.
     */
    //npm install -g typescript
    //tsc hello.ts

    /**
     * 다운레벨링
     * 앞서 언급된 또 다른 차이점은, 바로 템플릿 문자열이 아래의 내용에서,
     *
     * `Hello ${person}, today is ${date.toDateString()}!`;
     * 아래의 내용으로 다시 작성되었다는 점입니다.
     *
     * "Hello " + person + ", today is " + date.toDateString() + "!";
     * 새로운 또는 “상위” 버전의 ECMAScript를 예전의 또는 “하위” 버전의 것으로 바꾸는 과정을 다운레벨링이라 부르기도 합니다.
     *
     * TypeScript는 ES3라는 아주 구버전의 ECMAScript를 타겟으로 동작하는 것이 기본 동작입니다.
     */


    /**
     * 엄격도
     *
     * TypeScript의 타입 검사기를 사용하는 목적은 사용자마다 다양합니다. 누군가는 프로그램 일부만 타입 검사를 수행하는 느슨한 수준을 유지하면서도,
     * 유용한 프로그래밍 도구로서의 기능은 온전히 활용하고 싶을 수 있습니다. 이는 TypeScript를 사용할 때 기본으로 제공하고자 하는 경험입니다.
     *
     * 하지만, any를 사용하면 애초에 TypeScript를 사용하는 이유가 무색해지는 경우가 많습니다.
     * 프로그램에서 타입을 더 구체적으로 사용할수록, 더 많은 유효성 검사와 도구 기능을 사용할 수 있으며,
     * 이는 곧 코드 상에서 보다 적은 버그를 만나게 된다는 의미입니다.
     */



}
