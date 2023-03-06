// import classes from './Counter.module.css';
// import PropTypes from 'prop-types';
// import { useState, useCallback } from 'react';

// export function CounterStateful({
//   count: initialCount,
//   min,
//   max,
//   step,
//   buttonLabels,
// }) {
//   const [count, setCount] = useState(initialCount);

//   const handleIncre = useCallback(() => {
//     console.log('증가증가증가yo');
//     setCount((count) => count + step);
//   }, [step]);

//   // const handleIncre = useCa() => {
//   //   setCount(count + step);
//   //   console.log('증가증가증가yo');
//   // };

//   const handleDecre = () => {
//     console.log('감소감소감소Ye');
//     setCount((count) => count - step);
//   };

//   return (
//     <div className={classes.Counter}>
//       <button
//         type="button"
//         onClick={handleIncre}
//         aria-label={buttonLabels.increment}
//       >
//         +
//       </button>
//       <output>{count}</output>
//       <button
//         type="button"
//         onClick={handleDecre}
//         aria-label={buttonLabels.decrement}
//       >
//         -
//       </button>
//     </div>
//   );
// }

// CounterStateful.defaultProps = {
//   min: 1,
//   max: 10,
//   step: 1,
//   count: 1,
//   buttonLabels: {
//     increment: '카운터 증가',
//     decrement: '카운터 감소',
//   },
// };

// CounterStateful.propTypes = {
//   /**카운터 현재 값 */
//   count: PropTypes.number,
//   /**카운터 최소 값 */
//   min: PropTypes.number,
//   /**카운터 최대 값 */
//   max: PropTypes.number,
//   /**카운터 변경 값 */
//   step: PropTypes.number,
//   /**카운터 버튼 제어 */
//   buttonLabels: PropTypes.shape({
//     increment: PropTypes.string,
//     decrement: PropTypes.string,
//   }),
// };

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import classes from './Counter.module.css';
import { CountButton } from './CountButton';
import { CountOutput } from './CountOutput';

// - [x] [React hook] useMemo를 사용해 컴포넌트 기억하기
// - [x] [React HOC] React.memo를 사용해 컴포넌트 기억하기

export function CounterStateful({
  count: initialCount,
  min,
  max,
  step,
  buttonLabels,
  className,
}) {
  const [count, setCount] = useState(initialCount);

  const combineClassNames = classNames(classes.Counter, className);

  const handleIncrement = useCallback(() => {
    console.log('증가');
    setCount((count) => count + step);
  }, [step]);

  const handleDecrement = useCallback(() => {
    console.log('감소');
    setCount((count) => count - step);
  }, [step]);

  return (
    <div className={combineClassNames}>
      <CountButton label={buttonLabels.increment} onUpdate={handleIncrement}>
        +
      </CountButton>
      <CountOutput>{count}</CountOutput>
      <CountButton label={buttonLabels.decrement} onUpdate={handleDecrement}>
        -
      </CountButton>
    </div>
  );
}

/* Props ------------------------------------------------------------------- */

CounterStateful.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
  buttonLabels: {
    increment: '카운트 증가',
    decrement: '카운트 감소',
  },
  className: '',
};

CounterStateful.propTypes = {
  /** 카운트 현재 값입니다. */
  count: PropTypes.number,
  /** 카운트 최솟값입니다. */
  min: PropTypes.number,
  /** 카운트 최댓값입니다. */
  max: PropTypes.number,
  /** 카운트 변경 값입니다. */
  step: PropTypes.number,
  /** 카운트 버튼 레이블 설정입니다. */
  buttonLabels: PropTypes.shape({
    increment: PropTypes.string,
    decrement: PropTypes.string,
  }),
  /** 사용자 정의 클래스 이름입니다. */
  className: PropTypes.string,
};
