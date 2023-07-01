import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

const Navbar = () => {
  const themes = useContext(ThemeContext);

  return (
    <nav className={"bar "+ themes.theme}>
      <Link to="/"> Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="contacto">Contacto</Link>
      <button onClick={themes.toggleTheme} className={themes.theme}>Change theme</button>
    </nav>
  );
};

export default Navbar;