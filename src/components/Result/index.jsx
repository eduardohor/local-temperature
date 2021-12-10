import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BsFileEarmarkMusic } from "react-icons/bs";

function Result(props) {
  const [music, setMusic] = useState([]);

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
      });
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
          <ul className={styles.listMusic}>
            {music.map((result, index) => {
              return (
                <li key={index}>
                  <a href={result.url.toString()} target="_blank">
                    <BsFileEarmarkMusic /> {result.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={styles.contentSalve}>
            <a className={styles.salveList} href="">
              Listas Salvas
            </a>
            <button className={styles.btnSalve}>Salvar lista</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Result;
