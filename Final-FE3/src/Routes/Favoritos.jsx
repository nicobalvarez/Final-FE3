/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Contexts/ThemeContext";



function Favoritos() {
  const [odon, setOdon] = useState(JSON.parse(localStorage.getItem("fav")))
  const themes = useContext(ThemeContext);
  
  return (
      (odon?.length > 1)? (
        <div className={"list " + themes.theme}>
          {odon.map((o) => (
            <Card name={o.name} username={o.username} id={o.id} key={o.id} />
          ))}
        </div>
        ):
        (<div className={"fav "+ themes.theme}>
          No se agrego ningun odontologo 😔
        </div>)
  );
}

export default Favoritos;
