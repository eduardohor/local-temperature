import React from "react";
import { BsFileEarmarkMusic } from "react-icons/bs";
import styles from "./styles.module.scss";

export function MusicPlayer(props) {
  return (
    <>
      <ul className={styles.listMusic}>
        {props.music.map((result, index) => {
          return (
            <li key={index}>
              <a href={result.url.toString()} target="_blank">
                <BsFileEarmarkMusic /> {result.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
