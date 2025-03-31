import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";
import { getApps } from "./utils/helper";

function App() {
  const CurrentApp = getApps();
  return (
    <div className={styles.App}>
      <Router>
        <CurrentApp />
      </Router>
    </div>
  );
}

export default App;
