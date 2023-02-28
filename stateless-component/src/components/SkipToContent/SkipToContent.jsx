import { useEffect, useRef } from "react";
import { A11yHidden } from "@/components";

//to => link의 isrequired 속성
export function SkipToContent({ to, ...restProps }) {
  // null을 준 이유 -  내가원하는 DOM 요소가 없으면 null 이 나오니까 false 주듯 null을 줌.
  const skipToContentRef = useRef(null);

  console.log(skipToContentRef.current); // {current:null}
  //useRef는 불변한 방식인 react의 특징을 벗어난 친구다

  // useEffect 안에 찍어논 target은  밖에서 쓸 수 없으니까, 변수를 따로 뻄
  let targetElement = null;

  //복사=>원시형데이터(primitives) vs 참조=>참조형데이터(object)

  //클래스는 createRef를 가졌는데, 함수도 나줘! 해서 useRef가 나옴
  // react 요소 -> reactDom에의해 렌더링이 되면 -> 실제DOM이됨
  // 즉, react 요소를 통해 jsx를 표현하는데, ReactDom에의해 렌더링이 되면,
  // 웹브라우저에서 <a> 요소로 될텐데, 이걸 참조하고싶음
  // 어떻게 참조할건데?
  // querySelector로 찾아도되는데, 이건 Not Thinking in react잖어
  // 그럼 react의 방식은 뭔데? useRef()!
  // 방식은 2개가 있어!  =>근데 범용적으로 사용되는 1번방식을 쓴대

  useEffect(() => {
    //목적:
    //to 속성을 명시적으로 '#snack'이 아닌, 스크립트 제어를 통해 전달하겠다.
    //또한 거기에 tabindex =-1 를 주고 연결(이동) 시켜주겠다
    //방법 (취향, ById= 속도 selector =  가독성 장점이있음)
    //1. document.getElementById('#snack'.replace(/m/, ''))
    //2. document.querySelector('#snack')

    // 실제 DOM 요소(객체) 접근(참조)
    const targetElement = document.querySelector(to);

    if (targetElement) {
      // 실제 DOM 요소 조작
      //   console.log(targetElement);
      targetElement.setAttribute("tabindex", -1);

      // 이벤트 핸들링
      //과자를 찾고싶은데 어떻게 찾아야되? 클래스명은 괴랄하고.,,,
      // href로 접근하는방식을 아래코드처럼 사용할 수 있지만.. 이건 너무 비효율적이야 (#이 몇개있는지도 알아야되고,,등등)
      // const skipToContentLinks = Array.from(document.querySelectorAll('a[href*="#"]))
      // 이런 상황일 때 쓰라고 제공된게 useRef인거야

      console.log(skipToContentRef.current);
      skipToContentRef.current.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("click");
      });
    }
  }, []);

  //   const handleJumpToArea = (e) => {
  //     e.preventDefault();
  //     if (targetElement) {
  //       //요소를 클릭시 포커스를 함
  //       targetElement.focus();
  //     }
  //   };

  //리액트는 기본적으로 ref 속성을 제공한다
  //여기서 번뜩 떠오른 아이디어 HTMLAchorElement = <a> 인데, HTML는 클래스고 <a>는 거기서 나온 인스턴스다.
  //즉 거기에 우리가 속성을준다거나 child를 줌으로써 조작해서 사용하는게 클래스와 인스턴스의 관계!

  return (
    <>
      <a href="" ref={skipToContentRef}>
        demo
      </a>
      <A11yHidden as="a" focusable href={to} />{" "}
    </>
  );
}

// onClick={handleJumpToArea}
