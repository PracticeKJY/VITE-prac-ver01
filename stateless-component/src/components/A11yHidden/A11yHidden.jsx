// import { forwardRef } from 'react';
import { forwardRef } from "react";
import classes from "./A11yHidden.module.css";

export const A11yHidden = forwardRef(function A11yeee(
  { as: Component = "span", focusable = false, className = "", ...restProps },
  ref
) {
  // 변수(문자 값) + ' ' + 변수(문자 값)
  // `${개발자의 클래스이름} ${사용자의 클래스이름}`
  // const combinedClassNames = `${classes.srOnly} ${className}`.trim();
  const combinedClassNames = `${classes.srOnly} ${
    focusable ? classes.focusable : ""
  } ${className}`.trim();

  return (
    <Component
      ref={ref}
      className={combinedClassNames}
      {...restProps} // 전개 구문: { className, id, title, 'data-myName', children }
    />
  );
});

// props (외부에서 전달되는 함수의 인자 집합)
// 함수 내부에서는 기본 값 설정

// _c  => displayName으로 이름값을 명시적으로 선언해줌 ( 기본값 : _c )
A11yHidden.displayName = "범샘";
//혹은 forwardRef의 선언에서 화살표함수로 컴포넌트를 선언할게 아니라,
// 함수선언문 (fucntion 이름(){}) 으로해주면 그 이름이 명시적으로 선언됨
