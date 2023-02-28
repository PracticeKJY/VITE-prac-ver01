// import { createElement as h } from "react";
// import classes from "./A11yHidden.module.css";

// export const A11yHidden = ({
//   //객체를 parameter로 받음
//   //Component의 이름 설정 방식:
//   //React는 브라우저가 인식할 수 없는 HTML 표준 요소가 아닌경우,
//   //컴포넌트 이름의 첫글자는 대문자로 구분한다.

//   //React를 속여(trick) 보자!
//   as: Component = "span",
//   focusable = false,
//   className = "",
//   ...restProps
// }) => {
//   const combinedClassNames = `${classes.srOnly} ${className}.trim()`;

//   return <Component className={combinedClassNames} {...restProps} />;
// };

import classes from "./A11yHidden.module.css";

export const A11yHidden = ({
  as: Component,
  focusable,
  className,
  ...restProps // 나머지 매개변수: { id, title, 'data-myName', children }
}) => {
  // 변수(문자 값) + ' ' + 변수(문자 값)
  // `${개발자의 클래스이름} ${사용자의 클래스이름}`
  // const combinedClassNames = `${classes.srOnly} ${className}`.trim();
  const combinedClassNames = `${classes.srOnly} ${
    focusable ? classes.focusable : ""
  } ${className}`.trim();

  return (
    <Component
      className={combinedClassNames}
      {...restProps} // 전개 구문: { className, id, title, 'data-myName', children }
    />
  );
};

// props (외부에서 전달되는 함수의 인자 집합)
// 함수 내부에서는 기본 값 설정
A11yHidden.defaultProps = {
  as: "span",
  className: "",
  focusable: false,
};
