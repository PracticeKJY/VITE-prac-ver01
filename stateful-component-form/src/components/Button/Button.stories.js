import { Button } from './Button';

//meta 정보
export default {
  title: 'Lecture/Button',
  component: Button,
  tags: ['autodocs'],
  args: { ...Button.defaultProps, children: '회원가입' },
};

//첫번째 story
export const Primary = {};
//두번쨰 story
export const PrimaryDisabled = {
  args: {
    disabled: true,
  },
};
// 세번쨰 story
export const Secondary = {
  args: {
    secondary: true,
    // children: '연습용222',
  },
};
// 네번쨰 story
export const SecondaryDisabled = {
  args: {
    disabled: true,
    ...Secondary.args,
  },
};
