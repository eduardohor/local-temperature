import { SearchBox } from "./components/SearchBox/index";
import { ListMusic } from "./components/ListMusic/index";
import styles from "./styles/App.module.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className={styles.contentWrapper}>
        <h1>Temperatura local</h1>

        <Switch>
          <Route exact path="/" component={SearchBox}>
            <SearchBox />
          </Route>
          <Route path="/list-music" component={ListMusic}>
            <ListMusic />
          </Route>
          <Route path="*">
            <div className={styles.noRoute}>Essa rota não existe</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
