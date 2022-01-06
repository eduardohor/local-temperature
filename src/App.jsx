import { SearchBox } from "./components/SearchBox/index";
import { ListSave } from "./components/ListSave/index";
import styles from "./styles/App.module.scss";

import { ItemsProvider } from "./components/Context/ItemsProvider";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className={styles.contentWrapper}>
        <h1>Temperatura local</h1>

        <ItemsProvider>
          <Switch>
            <Route exact path="/" component={SearchBox}>
              <SearchBox />
            </Route>
            <Route path="/list-music" component={ListSave}>
              <ListSave />
            </Route>
            <Route path="*">
              <div className={styles.noRoute}>Essa rota não existe</div>
            </Route>
          </Switch>
        </ItemsProvider>
      </div>
    </Router>
  );
}
