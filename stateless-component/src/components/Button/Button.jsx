import classes from "./Button.module.css";
import { tokens } from "../../theme/tokens";

const { colors } = tokens;

export function Button({ mode, ...restProps }) {
  //props로부터 파생된 지역변수 (렌더링관 상관없음)
  let isPrimary = mode.includes("primary");

  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: isPrimary
          ? colors.primary["500"]
          : colors.primary["50"],
        color: isPrimary ? colors.white : colors.primary["400"],
        // backgroundColor: colors.primary["500"],
        // color: colors.white,
      }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: "primary", // 'secondary'
  secondary: false,
  disabled: false,
};

/* -------------------------------------------------------------------------- */

// export function Button({ mode = 'primary', children }) {
//   return (
//     <button type="button" className={classes.component}>
//       {children}
//     </button>
//   );
// }

// HTML standards Component {blue}
// {
//   <button></button>
// }

// Custom Component  {blue}
// {
//   <Button></Button>
// }
