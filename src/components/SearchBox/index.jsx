import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import { ResultListMusic } from "../ResultListMusic/index";

export function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [sound, setSound] = useState("");
  const [tracks, setTracks] = useState([]);

  function handleChange(event) {
    let t = event.target.value;
    setCity(t);
  }

  function handleSearch(event) {
    event.preventDefault();
    if (city) {
      weatherForecast();

      setCity("");
    }
  }

  function weatherForecast() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a249e9bb4618ab9c5245e86a8f4801db&lang=pt-br&units=metric`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeather(data);
        testTemperature(data);
      });
  }

  function testTemperature(temp) {
    let tempCurrent = temp.main.temp;

    if (tempCurrent >= 32) {
      setSound("um Rock");
      setTracks(484129036);
    } else if (tempCurrent < 32 && tempCurrent >= 24) {
      setSound("um Pop");
      setTracks(44494086);
    } else if (tempCurrent < 24 && tempCurrent >= 16) {
      setSound("uma música Clássica");
      setTracks(55157283);
    } else if (tempCurrent < 16) {
      setSound("um Lofi");
      setTracks(77278082);
    }
  }

  return (
    <div className={styles.content}>
      <form>
        <div className={styles.contentWrapperSearch}>
          <input
            className={styles.txtBusca}
            type="text"
            id="txtbusca"
            placeholder="Digite o nome da cidade"
            onChange={handleChange}
            value={city}
          />
          <button
            className={styles.btnSearch}
            type="submit"
            onClick={handleSearch}
          >
            Buscar
          </button>
          <Link to="list-music" className={styles.btnSalveList}>
            Listas Salvas
          </Link>
        </div>

        <ResultListMusic weather={weather} sound={sound} tracks={tracks} />
      </form>
    </div>
  );
}
