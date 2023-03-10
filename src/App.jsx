// import "./App.css";
import classes from "./App.module.css";
import { Button } from "./components";

function App() {
  // const handleClick = (e) => {
  //   console.log(e.target);
  // };

  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>
      <div role="group" className={classes.buttonGroup}>
        <Button>회원가입</Button>
        <Button mode="Secondary">로그인</Button>
      </div>
    </div>
  );
}

export default App;
