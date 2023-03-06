import classes from './Counter.module.css';
import PropTypes from 'prop-types';

export function CounterStateless({
  count,
  min,
  max,
  step,
  buttonLabels,
  onDec,
  onInc,
}) {
  return (
    <div className={classes.Counter}>
      <button type="button" onClick={onInc} aria-label={buttonLabels.increment}>
        +
      </button>
      <output>{count}</output>
      <button type="button" onClick={onDec} aria-label={buttonLabels.decrement}>
        -
      </button>
    </div>
  );
}

CounterStateless.defaultProps = {
  min: 1,
  max: 10,
  step: 1,
  count: 1,
  buttonLabels: {
    increment: '카운터 증가',
    decrement: '카운터 감소',
  },
  onInc: null,
  onDec: null,
};

CounterStateless.propTypes = {
  /**카운터 현재 값 */
  count: PropTypes.number,
  /**카운터 최소 값 */
  min: PropTypes.number,
  /**카운터 최대 값 */
  max: PropTypes.number,
  /**카운터 변경 값 */
  step: PropTypes.number,
  /**카운터 버튼 제어 */
  buttonLabels: PropTypes.shape({
    increment: PropTypes.string,
    decrement: PropTypes.string,
  }),
  /**카운터 + 버튼 설정 */
  onInc: PropTypes.func,
  /**카운터 - 버튼 설정 */
  onDec: PropTypes.func,
};
