import { useState } from "react";
import styles from "./styles.module.scss";

export function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [sound, setSound] = useState("");
  const [data, setData] = useState(null);

  function handleChange(event) {
    let t = event.target.value;
    setCity(t);
  }

  async function handleSearch() {
    await fetch(
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
    let textSound;

    if (tempCurrent > 32) {
      textSound = "Clima ideal para ouvir um Rock";
    } else if (tempCurrent < 32 && tempCurrent >= 24) {
      textSound = "Clima ideal para ouvir um Pop";
    } else if (tempCurrent < 24 && tempCurrent >= 16) {
      textSound = "Clima ideal para ouvir uma música Clássica";
    } else if (tempCurrent < 16) {
      textSound = "Clima ideal para ouvir um Lofi";
    }

    setSound(textSound);
    shazam();
  }

  function shazam() {
    fetch("https://shazam.p.rapidapi.com/charts/list", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "e38d45c4aemsh52ec5ba560429efp147498jsn379a570fa42c",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.global.genres[0].id);
        
        
      })
      .catch((err) => {
        console.error(err);
      });
  }s

  function listMusic(test) {
    fetch(
      `https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "e38d45c4aemsh52ec5ba560429efp147498jsn379a570fa42c",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data)=>{
        console.log(data)
      })
      .catch((err) => {
        console.error(err);
      });
  }
  

  return (
    <div className={styles.content}>
      <div className={styles.contentWrapperSearch}>
        <input
          className={styles.txtBusca}
          type="text"
          id="txtbusca"
          placeholder="Digite o nome da cidade"
          onChange={handleChange}
        />
        <button
          className={styles.btSearch}
          type="submit"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      <div className={styles.contentItems}>
        {weather ? (
          <div>
            <p>
              Clima em {weather.name}: {weather.main.temp}
              <code>&deg;</code>C
            </p>
            <p>
              {sound}
              {console.log(data)}
              {listMusic(data)}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
