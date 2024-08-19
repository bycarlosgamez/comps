import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const hanldeClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return (
    <a onClick={hanldeClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
