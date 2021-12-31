import React, { useContext } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import styles from "./styles.module.scss";

import { ItemsContext } from "../Context/ItemsProvider";
import { MusicPlayer } from "../MusicPlayer/index";
import { Link } from "react-router-dom";

export function ListMusic() {
  const [items, setItems] = useContext(ItemsContext);

  function deleteItem(item) {
    let filterItems = items.filter((result) => result != item);
    setItems(filterItems);
  }

  return (
    <>
      <h1>Listas Salvas</h1>
      <Link to="/">
        <IoChevronBackCircleSharp className={styles.btnBack} />
      </Link>
      <hr />
      <div className={styles.contentList}>
        <ul>
          {items.map(
            (result, index) => (
              <li key={index} className={styles.listItems}>
                {`Local: ${result.city}`}
                <br />
                {`Temperatura: ${result.temperatura}`} <code>&deg;</code>C
                <br />
                {`Data: ${result.today}`}
                <br />
                Lista de Músicas:
                <MusicPlayer music={result.music}></MusicPlayer>
                <button onClick={() => deleteItem(result)}>Remover Item</button>
              </li>
            )

            // <li>{"Local: " + result.city}</li>
            // <li>
            //
            // </li>
            // <li>{" Data: " + result.today}</li>
            // <li className={styles.ListMusic}>
            //   Lista de Músicas:{" "}
            //   <MusicPlayer music={result.music}></MusicPlayer>
            //   <button onClick={deleteItem(result)}>Remover Item</button>
            // </li>
          )}
        </ul>
      </div>
    </>
  );
}
