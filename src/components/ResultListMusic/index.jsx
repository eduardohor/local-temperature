import React, { useState, useContext } from "react";

import styles from "./styles.module.scss";

import { ItemsContext } from "../Context/ItemsProvider";
import { MusicPlayer } from "../MusicPlayer/index";

export function ResultListMusic(props) {
  const [music, setMusic] = useState([]);
  const [showList, setShowList] = useState(false);

  const [items, setItems] = useContext(ItemsContext);

  function searchPlayList(event) {
    event.preventDefault();
    fetch(
      `https://shazam.p.rapidapi.com/songs/list-recommendations?key=${props.tracks}&locale=en-US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "bac2dba51amshc4cc9af918cf15dp1fd7b0jsneebcc53e675c",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let track = data.tracks;
        setMusic(track);
        setShowList(true);
      });
  }

  function salvedList(event) {
    event.preventDefault();
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let ano = today.getFullYear();

    let dados = {
      temperatura: Math.round(props.weather.main.temp),
      city: props.weather.name,
      music: music,
      today: day + "/" + month + "/" + ano,
    };

    setItems([...items, dados]);
  }

  return (
    <div className={styles.contentItems}>
      {props.weather ? (
        <div className={styles.items}>
          <p>
            Clima em {props.weather.name}: {Math.round(props.weather.main.temp)}
            <code>&deg;</code>C
          </p>
          <p>Clima ideal para ouvir {props.sound}</p>
          <button className={styles.btnPlayList} onClick={searchPlayList}>
            Abrir Playlist
          </button>

          <MusicPlayer music={music}></MusicPlayer>

          {showList ? (
            <div className={styles.contentSalve}>
              <button className={styles.btnSalve} onClick={salvedList}>
                Salvar dados
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
