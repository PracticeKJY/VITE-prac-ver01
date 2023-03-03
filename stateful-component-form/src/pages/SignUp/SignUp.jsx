import { useRef, useState } from "react";
import { EventSubunSub, BaseLayout, FormInput, Button } from "@/components";
import classes from "./SignUp.module.scss";

/* Intialization ------------------------------------------------------------ */

const initialFormState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

/* Component ---------------------------------------------------------------- */

// useState vs useRef
// re-rendering (immutation) vs re-rendering ❌ (mulation)

export default function SignUp() {
  const formStateRef = useRef(initialFormState);

  //리랜더링을 일부러 유발하기 위해 상태를 선언
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("업데이트전");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("reset");
    // setName("");
    // setEmail("");
    // setPassword("");
    // setPasswordConfirm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formStateRef.current);
    console.log("회원가입 시도 → Firebase Authentication");
  };

  const handleChangeInput = (e) => {
    // console.dir(e.target);
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    // console.log(name, value);
    // console.log(formStateRef.current);
  };

  //setState로 상태가관리되는 formInput 같은 컴포넌트를 controlled component라고한다

  return (
    <BaseLayout className={classes.SignUp}>
      {isVisible && <EventSubunSub />}
      <button
        type="button"
        onClick={() => setMessage(setIsVisible(!isVisible))}
      >
        {isVisible ? "unmount" : "mount"}
      </button>
      <p>{message}</p>
      <button
        type="button"
        onClick={() =>
          setMessage(
            message.includes("업데이트전") ? "업데이트후" : "업데이트전"
          )
        }
      >
        업데이트
      </button>
      <h2>회원가입 페이지</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput name="name" label="이름" onChange={handleChangeInput} />
        <FormInput
          name="email"
          type="email"
          label="이메일"
          onChange={handleChangeInput}
        />
        <FormInput
          name="password"
          type="password"
          label="패스워드"
          onChange={handleChangeInput}
        />
        <FormInput
          name="passwordConfirm"
          type="password"
          label="패스워드 확인"
          onChange={handleChangeInput}
        />

        <div className={classes.group}>
          <Button type="submit">회원가입</Button>
          <Button secondary type="reset" disabled>
            초기화
          </Button>
        </div>
      </form>
    </BaseLayout>
  );
}
