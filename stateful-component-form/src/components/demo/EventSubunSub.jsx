import { useEffect, useLayoutEffect } from "react";

//컨셉: 리랜더링을 유발하고 해결하는 실습을 해보자
export function EventSubunSub() {
  //1. 종속성 배열의 중요성
  // -종속성 배열(=[])이 없는 useEffect Hook은 re-rendering 될때마다
  //  effect callback이 실행 된다
  // -종속성 배열(=[])이 빈 경우, useEffect Hook은 re-rendering 되더라도
  //  effect callback은 1번 실행 된다

  // effect 실행순서 -> 리액트가 하는 일 이후 실행 (실제DOM에 렌더링 된 이후에 실행)
  // 부모가 랜더링되면 자식도 랜더링됨

  //2. 정리(cleanup)의 중요성
  // - 프로그래밍 : 책임감
  // - 클린업 함수의 역할

  //useLayoutEffect가 먼저 실행됨을 console.log()로 확인할 수 있음
  useLayoutEffect(() => {
    console.log("useLayoutEffect🧏‍♂️");
  }, []);

  //클린업이 왜필요해?
  //eventsubunsub를 제거할때 종속성배열을 안넣었을때의 이슈도 같이 사라질것인가를 유도하면서 설명함
  //
  useEffect(() => {
    console.log("useEffect");
    let clearIntervalId = setInterval(() => {
      console.count("count : ");
    }, 2000);
    // console.log({ clearIntervalId });

    //cleanup
    return function cleanup() {
      console.log("구독해제👼");
      clearInterval(clearIntervalId);
    };
  });

  return <div>Eventsub</div>;
}
