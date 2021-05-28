# React STUDY

## 5월 28일
### NaviApp
### expo-cli


## 5월 7일
### 구조 분해 할당
    - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있음

#### - 객체에서 변수를 재할당하는 방법 
    const foobar = {
        foo: 1000,
        bar: 500
    }
#### - foobar에 있는 foo property를 woo로 바꿀 경우
    1. 구조분해 할당없이 변수명 재할당
        const woo = foobar.foo

    2. 구조분해 할당을 이용하는 방법
        const {foo:woo} = foobar
        console.log(woo) //1000
        console.log(foobar)

    3. React에서 자주 사용되는 구조분해 할당
        this.state = {
            foo: 100,
            bar: 200
        }
        
        const {foo, bar} = this.state

## 3월 26일
    1. render() : 컴포넌트 렌더링
    2. state : this.setState() 로 호출
    3. constructor() : 컴포넌트 생성 시 한 번만 실행하는 생성자 메소드

