import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
