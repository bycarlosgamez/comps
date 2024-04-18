import PropTypes from 'prop-types';

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  valueValidation: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);

    if (count > 1) return new Error('only one value can be added');
  },
};

export default Button;
