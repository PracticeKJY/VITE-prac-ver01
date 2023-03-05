import { BaseLayout, Button } from '@/components';
import classes from './Home.module.scss';
import { Secondary } from './../../stories/Button.stories';

/* Component ---------------------------------------------------------------- */

export default function Home() {
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
      </div>
    </BaseLayout>
  );
}
