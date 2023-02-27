import classes from "./Button.module.css";
// import { tokens } from "@/theme/tokens";
import { getColor } from "@/theme/utils";

// const { colors } = tokens;

export function Button({
  mode,
  secondary: isSecondary,
  disabled,
  ...restProps
}) {
  // console.log(isSecondary);
  console.log(disabled);

  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: !isSecondary
          ? // ? colors.primary["500"]
            // : colors.primary["50"],
            getColor("primary/500")
          : getColor("primary/50"),
        color: !isSecondary ? getColor("white") : getColor("primary/400"),
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
