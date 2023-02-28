// import PropTypes from "prop-types";
//구조분해할당
import { arrayOf, number, string, oneOfType, oneOf, shape } from "prop-types";
import classes from "./Nav.module.scss";
import { A11yHidden } from "@/components";

export function Nav({ as, headline, list, ...restProps }) {
  return (
    <nav {...restProps}>
      {/* 태그(=types) =  as, 대체 텍스트 = headline */}
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.to}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  list: [] /*11번째 줄에의해 배열이 필요 => [{ id: string, to: string, text: string }] */,
  as: "h2", // 이것들 중 하나 'h2', 'h3', 'h4', 'h5', 'h6'
};

Nav.propTypes = {
  //숫자 혹은 문자를 받는 []배열을 선언해줌
  //   list: arrayOf(oneOfType([string, number])),
  //좀 더 구체적인 명시를 해줌
  list: arrayOf(
    shape({
      id: string,
      to: string.isRequired,
      text: string,
    }).isRequired
  ).isRequired,
  headline: string.isRequired,
  as: oneOf(["h2", "h3", "h4", "h5", "h6"]),
};
