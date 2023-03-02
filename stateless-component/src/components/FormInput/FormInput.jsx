// import { useId } from "react";
// import { A11yHidden } from "@/components";
// import classes from "./FormInput.module.scss";

// export function FormInput({
//   label,
//   type = "text",
//   invisibleLabel = false,
//   vertical = false,
//   ...restProps
// }) {
//   const id = useId();
//   const combineClassNames = `${classes.control} ${
//     vertical ? classes.control_vertical : ""
//   }`;

//   console.log(restProps);

//   return (
//     <div className={combineClassNames}>
//       {renderLabel(id, label, invisibleLabel)}
//       <input id={id} type={type} className={classes.input} {...restProps} />
//     </div>
//   );
// }

// function renderLabel(id, label, invisibleLabel) {
//   return invisibleLabel ? (
//     <A11yHidden as="label" htmlFor={id} className={classes.label}>
//       {label}
//     </A11yHidden>
//   ) : (
//     <label htmlFor={id} className={classes.label}>
//       {label}
//     </label>
//   );
// }
//-------------------------------------------------------

import { useId } from "react";
import { A11yHidden } from "./../A11yHidden/A11yHidden";
import classes from "./FormInput.module.scss";
export function FormInput({
  label,
  type = "text",
  invisibleLabel = false,
  ...restProps
}) {
  const id = useId();
  console.log(restProps);
  return (
    <div className={classes.control}>
      {renderLabel(id, label, invisibleLabel)}
      <input id={id} type="text" className={classes.input} {...restProps} />
    </div>
  );
}

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id} className={classes.label}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
  );
}
