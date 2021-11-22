import { SearchBox } from "./components/SearchBox/index";
import styles from "./styles/App.module.scss";

export function App() {
  return (
    <div className={styles.contentWrapper}>
      <h1>Temperatura local</h1>

      <SearchBox />
    </div>
  );
}
