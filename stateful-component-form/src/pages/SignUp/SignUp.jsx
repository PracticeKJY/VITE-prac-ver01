import { useEffect, useState } from "react";
import { BaseLayout, FormInput, Button } from "@/components";
import classes from "./SignUp.module.scss";

/* Intialization ------------------------------------------------------------ */

// const initialFormState = {
//   name: "",
//   email: "",
//   password: "",
//   passwordConfirm: "",
// };

/* Component ---------------------------------------------------------------- */
// 폼의 상태 = formState 를 이용하여 폼을 제어하려함 => stateful component

export default function SignUp() {
  // const [formState, setFormState] = useState(initialFormState);

  //낱개로 상태를 관리하길 권장함 (=> 쓸 때없는 리랜더링을 방지하자)
  //왜냐면 formState로 다같이 관리를하면, 4개의 input중 하나만 적어도 랜더링이 되기 때문에, 성능적으로 이슈가 생기기 떄문이다.
  //...formState는 이 낱개들을 모두 묶은 것과 같은 의미
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    console.log("계속 마운트와 업데이트 되고 있어요.");
  });

  const handleReset = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("회원가입 시도 → Firebase Authentication");
  };

  //setState로 상태가관리되는 formInput 같은 컴포넌트를 controlled component라고한다

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput
          label="이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <FormInput
          label="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormInput
          label="패스워드"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormInput
          label="패스워드 확인"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
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
