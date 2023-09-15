import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const toogleTheme = () => {
    dispatch({ type: "TOGLE_THEME" });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Destacados</Link>
        </li>
      </ul>
      <button onClick={toogleTheme}>Cambiar tema</button>
      <p>Teama actual: {state.theme}</p>
    </nav>
  )
}

export default Navbar;