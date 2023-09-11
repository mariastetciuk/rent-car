import { NavLink } from "react-router-dom";
import scss from './Header.module.scss'

const Header = () => {
  return <ul className={scss.list}>
    <li><NavLink to={`/`} >Home</NavLink></li>
    <li><NavLink to={`/catalog`} >Catalog</NavLink></li>
    <li><NavLink to={`/favorites`} >Favorites</NavLink></li>
  </ul>;
};

export default Header;
