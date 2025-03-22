import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Router>
          <Navbar />
          <Toaster position="bottom-center" />
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
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
