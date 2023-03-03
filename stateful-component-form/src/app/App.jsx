import classes from "./App.module.scss";

/* Pages -------------------------------------------------------------------- */

import Home from "@/pages/Home/Home";
import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";

/* Component ---------------------------------------------------------------- */
// 모듈을 사용할 때 클래스이름을 마음대로 줘도됨 ->CRA만  why? css모듈의 네이밍이 컴포넌트_클래스_해쉬 이기 떄문.
// vite의 경우, 클래스이름_해쉬넘버 이므로, 전체를 담당하는 css 이름을 컴포넌트 이름으로 줘서 직관적으로 만들자
// 크게 하는 일이 없어도 (예를들자면 margin :0 ) 프로퍼티를 넣어줘야 css모듈이 됨

function App() {
  return (
    <div className={classes.App}>
      {/* <Home /> */}
      <SignUp />
    </div>
  );
}

export default App;
