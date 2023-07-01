import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { ThemeContext } from "../Contexts/ThemeContext";

function Details() {
  const themes = useContext(ThemeContext);
  const params = useParams();
  const [odon, setOdon] = useState([]);

  async function getOdon() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const o = await res.json();
    setOdon(o);
  }

  useEffect(() => {
    getOdon();
  }, [params]);
  return (
    <div className={styles.cont + " "+ themes.theme}>
      <h3>Detalles del Odontologo</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Nombre</th>
            <th className={styles.th}>email</th>
            <th className={styles.th}>telefono</th>
            <th className={styles.th}>WebSite</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>{odon.name}</td>
            <td className={styles.td}>{odon.email}</td>
            <td className={styles.td}>{odon.phone}</td>
            <td className={styles.td}>{odon.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
