import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const Footer = () => {
  const themes = useContext(ThemeContext);
  return (
    <footer className={"footer " + themes.theme}>
      <p>Powered by</p>
      <img className="logo" src="/img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;