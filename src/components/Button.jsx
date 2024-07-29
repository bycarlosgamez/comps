import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    'flex item-center px-4',
    'py-2',
    'border-2',
    'font-medium',
    {
      'border-purple-600 bg-purple-600': primary,
      'border-teal-500 bg-teal-500': secondary,
      'border-green-500 bg-green-500': success,
      'border-red-500  bg-red-500': danger,
      'border-yellow-500 bg-yellow-500': warning,
      'border-gray-800 bg-gray-800':
        !primary && !secondary && !success && !danger && !warning,
      'rounded-full': rounded,
      rounded: !rounded,
      'text-white': !outline,
      'bg-white text-purple-600': outline && primary,
      'bg-white text-teal-500': outline && secondary,
      'bg-white text-green-500': outline && success,
      'bg-white text-red-500': outline && danger,
      'bg-white text-yellow-500': outline && warning,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
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
