import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Contexts/ThemeContext";

function List() {
  const [odon, setOdon] = useState([]);
  const themes = useContext(ThemeContext);

  async function getOdon() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const o = await res.json();
    setOdon(o);
  }

  useEffect(() => {
    getOdon();
  }, []);

  return (
    <>
      <div className={"list "+themes.theme} >
        {odon.map((o) => (
          <Card name={o.name} username={o.username} id={o.id} key={o.id} />
        ))}
      </div>
    </>
  );
}

export default List;
