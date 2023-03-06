import {
  BaseLayout,
  Button,
  Logo,
  CounterStateless,
  CounterStateful,
} from '@/components';
import classes from './Home.module.scss';
import { Secondary } from './../../stories/Button.stories';
import { useState, useCallback } from 'react';

/* Component ---------------------------------------------------------------- */

export default function Home() {
  const [count, setCount] = useState(11);
  const [step] = useState(3);

  const onInc = () => {
    setCount((count) => count + step);
  };

  // const MemoOnInc = useCallback(onInc, [step]);

  const onDec = useCallback(() => {
    setCount((count) => count - step);
  }, [step]);

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div className={classes.buttonGroup}>
          <Button children="로그인" />
          <Button secondary children="로그인" />
          <Button disabled children="로그인" />
          <Button secondary disabled children="로그인" />
        </div>
        <div className={classes.logoGroup}>
          <Logo />
          <Logo rotation={90} />
        </div>
        Stateless
        <CounterStateless
          count={count}
          step={step}
          onInc={onInc}
          onDec={onDec}
        />
        Stateful
        <CounterStateful count={count} step={step} />
      </div>
    </BaseLayout>
  );
}
