import { NavLink } from "react-router-dom";
import scss from './Header.module.scss'
import Container from "components/Shared/Container";

const Header = () => {
  return <header>
    <Container>
    <ul className={scss.list}>
    <li><NavLink to={`/`} >Home</NavLink></li>
    <li><NavLink to={`/catalog`} >Catalog</NavLink></li>
    <li><NavLink to={`/favorites`} >Favorites</NavLink></li>
  </ul>
  </Container>
  </header>;
};

export default Header;
