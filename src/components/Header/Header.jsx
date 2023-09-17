import { NavLink, Link } from 'react-router-dom';
import scss from './Header.module.scss';

import { AiFillCar } from 'react-icons/ai';

const Header = () => {
  return (
    <header className={scss.header}>
      <Link to="/" className={scss.logo}>
        <AiFillCar size="25px" color="#3470FF" />
        <p className={scss.logo__title}>
          CAR <span className={scss.logo__titleBlue}>RENTAL</span>{' '}
        </p>
      </Link>
      <ul className={scss.list}>
        <li>
          <NavLink to={`/`} className={scss.item}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/catalog`} className={scss.item}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to={`/favorites`} className={scss.item}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
