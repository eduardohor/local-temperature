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
    <div>
      <h1>Listas Salvas</h1>
      <div>
        {items.map((result, index) => {
          return (
            <li key={index}>
              {"Temperatura: " + result.temperatura + " Data: " + result.today}
            </li>
          );
        })}
      </div>
    </div>
  );
}
