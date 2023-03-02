import { useEffect, useRef } from "react";
import { A11yHidden } from "@/components";

export function SkipToContent({ to, ...restProps }) {
  const skipToContentRef = useRef(null);
  // console.log(skipToContentRef);
  // console.log(skipToContentRef.current); // {current:null}
  // console.log(targetElement);
  // useEffect 안에 찍어논 target은  밖에서 쓸 수 없으니까, 변수를 따로 뻄
  let targetElement = null;
  useEffect(() => {
    // 실제 DOM 요소(객체) 접근(참조)
    const targetElement = document.querySelector(to);

    if (targetElement) {
      // 실제 DOM 요소 조작
      targetElement.setAttribute("tabindex", -1);

      // 이벤트 핸들링
      // React의 방식(useRef)
      // console.log(skipToContentRef.current);
      skipToContentRef.current.addEventListener("click", (e) => {
        e.preventDefault();
        targetElement && targetElement.focus();
      });
    }
    // console.log(targetElement);
  }, []);

  //리액트는 기본적으로 ref 속성을 제공한다
  return (
    <>
      <A11yHidden
        as="a"
        ref={skipToContentRef}
        focusable
        href={to}
        {...restProps}
      />
    </>
  );
}
