import { createElement as h } from "react";
import classes from "./A11yHidden.module.css";

export const A11yHidden = ({
  //객체를 parameter로 받음
  //Component의 이름 설정 방식:
  //React는 브라우저가 인식할 수 없는 HTML 표준 요소가 아닌경우,
  //컴포넌트 이름의 첫글자는 대문자로 구분한다.

  //React를 속여(trick) 보자!
  as: Component,
  focusable,
  ...restProps
}) => {
  return <Component className={classes.srOnly} {...restProps} />;
};
