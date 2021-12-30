import React, { useContext } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import styles from "./styles.module.scss";

import { ItemsContext } from "../Context/ItemsProvider";
import { MusicPlayer } from "../MusicPlayer/index";
import { Link } from "react-router-dom";

export function ListMusic() {
  const [items, setItems] = useContext(ItemsContext);

  return (
    <>
      <h1>Listas Salvas</h1>
      <Link to="/">
        <IoChevronBackCircleSharp className={styles.btnBack} />
      </Link>
      <hr />
      <div className={styles.contentList}>
        {items.map((result, index) => {
          return (
            <ul key={index} className={styles.listItems}>
              <li>{"Local: " + result.city}</li>
              <li>
                {"Temperatura: " + result.temperatura} <code>&deg;</code>C
              </li>
              <li>{" Data: " + result.today}</li>
              <li className={styles.ListMusic}>
                Lista de Músicas:{" "}
                <MusicPlayer music={result.music}></MusicPlayer>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
