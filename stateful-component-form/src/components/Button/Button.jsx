import PropTypes from 'prop-types';
import { getColor } from '@/theme/utils';
import classes from './Button.module.scss';

/* Component ---------------------------------------------------------------- */

export function Button({ secondary: isSecondary, disabled, ...restProps }) {
  let buttonStyle = {};
  function getClassName(disabled, isSecondary, ...restprops) {
    if (!disabled) {
      buttonStyle = {
        backgroundColor: !isSecondary
          ? getColor('primary/400')
          : getColor('white'),
        color: !isSecondary ? getColor('white') : getColor('primary/400'),
      };
      // console.log('true : ', disabled);
    } else {
      // console.log('false : ', disabled);
      buttonStyle = {
        backgroundColor: !isSecondary
          ? getColor('primary/50')
          : getColor('gray/50'),
        color: !isSecondary ? getColor('primary/400') : getColor('gray/300'),
      };
    }

    return buttonStyle;
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={classes.Button}
      style={getClassName(disabled, isSecondary)}
      {...restProps}
    />
  );
}

/* Props -------------------------------------------------------------------- */

Button.defaultProps = {
  secondary: false,
  disabled: false,
};

Button.propTypes = {
  /** 버튼 모양을 두번째(secondary)로 설정합니다*/
  secondary: PropTypes.bool,
  /** 버튼을 비활성화(disabled) 합니다*/
  disabled: PropTypes.bool,
};
