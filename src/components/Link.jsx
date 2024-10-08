import classNames from 'classnames';
import useNavigation from '../hooks/useNavigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const hanldeClick = (event) => {
    if (event.ctlkey || event.metaKey) return;

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} onClick={hanldeClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
