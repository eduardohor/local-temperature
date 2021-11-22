import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Result from "../Result/index";

export function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [sound, setSound] = useState("");
  const [test, setTest] = useState([]);

  const SAVED_ITEMS = "savedItems";

  useEffect(() => {
    let saveItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (saveItems) {
      setTest(saveItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(weather));
  }, [weather]);

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

    testando();
  }

  function testTemperature(temp) {
    let tempCurrent = temp.main.temp;
    let textSound;

    if (tempCurrent > 32) {
      textSound = "um Rock";
    } else if (tempCurrent < 32 && tempCurrent >= 24) {
      textSound = "um Pop";
    } else if (tempCurrent < 24 && tempCurrent >= 16) {
      textSound = "uma música Clássica";
    } else if (tempCurrent < 16) {
      textSound = "um Lofi";
    }

    setSound(textSound);
  }

  function listMusic() {
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
      .then((data) => {
        let mapear = data.tracks;
        for (var i = 0; i < mapear.length; i++) {
          console.log(mapear[i].title, mapear[i].url);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function testando() {
    let mapear = [1, 2, 3, 4, 5];
    setTest(mapear);
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
            className={styles.btSearch}
            type="submit"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>

        <Result weather={weather} sound={sound} test={test} />
      </form>
    </div>
  );
}
