import { useEffect } from "react";

//컨셉: 리랜더링을 유발하고 해결하는 실습을 해보자
export function EventSubunSub() {
  useEffect(() => {
    console.log("타이머 구독/취소");

    setInterval(() => {
      console.count("키값도넣을수있어요");
    }, 3000);
  }, []);

  return <div>Eventsub</div>;
}
