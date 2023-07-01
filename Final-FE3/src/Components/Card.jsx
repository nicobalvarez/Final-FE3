import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const Card = ({ name, username, id }) => {
  const themes = useContext(ThemeContext);
  const [isFav, SetIsFav] = useState(
    JSON.parse(localStorage.getItem("fav"))
    ?.filter(f => f.id == id).length>0)
  
  
  function addFav(){
    if(!isFav){
      const old = JSON.parse(localStorage.getItem("fav")) ||[]
      const new_value = [...old, {id:id, name: name, username: username} ]
      localStorage.setItem("fav", JSON.stringify(new_value))
      
      SetIsFav(true)
      
    }else{
      const new_value = JSON.parse(localStorage.getItem("fav"))
                        .filter(f => f.id != id)
      
      localStorage.setItem("fav", JSON.stringify(new_value))
        
      SetIsFav(false)
    }
  }

  return (
    <>
      <div className={styles.card + " " +themes.theme} key={id}>
        <Link to={`/details/${id}`} style={{ display: "contents" }}>
          <div>
            <img
              className={styles.img}
              src="/img/doctor.png"
              alt="Doctor image"
            />

            <h4>{name}</h4>
            <h5>{username}</h5>
          </div>
        </Link>


        <button onClick={addFav} className={styles.button+" "+themes.theme }>
          {isFav?"Quitar de favoritos":"Agregar a favoritos"}
        </button>
      </div>
    </>
  );
};

export default Card;