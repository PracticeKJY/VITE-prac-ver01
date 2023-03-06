import { Header } from './Header';
import { getPathFromBaseUrl as baseURL } from '@/utils';

export default {
  title: 'Lecture/Header',
  component: Header,
  tags: ['autodocs'],
  arg: Header.defaultProps,
};

export const LogolabelXNavO = {
  args: {
    // logoLabel:
    navList: [
      { id: 'home', to: baseURL(), text: '홈', active: false },
      { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
      { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
      { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
    ],
  },
};

LogolabelXNavO.storyName = '로고레이블 O, Nav X';

export const LogolabelONavO = {
  args: {
    navList: LogolabelXNavO.args.navList,
  },
};

LogolabelONavO.storyName = '로고레이블 O, Nav O';

export const LogolabelXNavX = {
  args: {
    // logoLabel:
  },
};
export const LogolabelONavX = {
  args: {
    // logoLabel: 'Stateful Component & Form Design',
  },
};
