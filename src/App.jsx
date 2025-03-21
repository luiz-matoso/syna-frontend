import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
