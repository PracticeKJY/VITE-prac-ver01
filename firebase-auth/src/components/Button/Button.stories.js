import { Button } from './Button';

//meta 정보
export default {
  title: 'Kally/Button',
  component: Button,
  tags: ['autodocs'],
  args: { ...Button.defaultProps, children: '회원가입' },
};

//첫번째 story. meta정보의 args 프로퍼티로 기본값을 설정할 수 있음
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
// ...StoryComponent.args(구조분해)로 나머지args들도 받아올 수 있음
export const SecondaryDisabled = {
  args: {
    disabled: true,
    ...Secondary.args,
  },
};

export const PrimaryClickable = {
  args: {
    onClick() {
      console.log('회원가입 요청');
    },
  },
};
export const PrimaryHoverable = {
  args: {
    onMouseEnter() {
      console.log('마우스야어서와');
    },
    onMouseLeave() {
      console.log('마우스야가지마');
    },
  },
};
