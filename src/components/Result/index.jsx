import React from "react";
import styles from "./styles.module.scss";

function Result(props) {
  return (
    <div className={styles.contentItems}>
      {props.weather ? (
        <div>
          <p>
            Clima em {props.weather.name}: {Math.round(props.weather.main.temp)}
            <code>&deg;</code>C
          </p>
          <p>Clima ideal para ouvir {props.sound}</p>
          <ul>
            {props.test.map((test) => (
              <li key={props.test.toString()}>{test}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Result;
