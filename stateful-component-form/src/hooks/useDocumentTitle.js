import { useLayoutEffect } from 'react';

// 사용자 정의 훅 => 앞에 use를 붙이면 기존Hook을 커스텀 할 수 있음
// use 접두사를 사용하는 함수
// 웹 문서의 제목을 변경하는 훅
// =SideEffect ,
export const useDocumentTitle = (titleContent) => {
  useLayoutEffect(() => {
    document.title = titleContent;
  }, []);
};
