import "./Header.scss";

import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/tree-tracker-logo.svg";
function Header() {
  return (
    <>
      <header className="header-container">
        <NavLink to="/">
          <img className="header-container__logo" alt="" src={logo} />
        </NavLink>
        <nav className="header-container__nav">
          <NavLink className="header-container__nav-link" to="/maps">
            Maps
          </NavLink>
          <NavLink className="header-container__nav-link" to="/impact">
            Make an Impact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
