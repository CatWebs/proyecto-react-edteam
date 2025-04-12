import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/criptomonedas">Criptomonedas</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
