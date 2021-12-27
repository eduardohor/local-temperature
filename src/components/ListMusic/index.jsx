import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";

import { ItemsContext } from "../Context/index";
import { MusicPlayer } from "../MusicPlayer/index";

export function ListMusic() {
  const [items, setItems] = useContext(ItemsContext);
  const [temp, setTemp] = useState([]);
  const [listMusic, setListMusic] = useState([]);
  const [today, setToday] = useState([]);

  return (
    <>
      <h1>Listas Salvas</h1>
      <hr/>
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
