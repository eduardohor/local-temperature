import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BsFileEarmarkMusic } from "react-icons/bs";

const SAVED_ITEMS = "savedItems";

function Result(props) {
  const [music, setMusic] = useState([]);
  const [showList, setShowList] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

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
    setItems(
      music.map((result) => {
        return "Url: " + result.url + " Título: " + result.title;
      })
    );
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
          {showList ? (
            <div className={styles.contentSalve}>
              <Link to="list-music" className={styles.salveList}>
                Listas Salvas
              </Link>

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

export default Result;
