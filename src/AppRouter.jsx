import ShortenUrlPage from "./components/ShortenUrlPage";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className={styles.App}>
      <>
        <Toaster position="bottom-center" />
        <div className={styles["main-content"]}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <>
                  <Navbar />
                  <Dashboard />
                </>
              }
            />
          </Routes>
        </div>
      </>
    </div>
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/:url" element={<ShortenUrlPage />} />
    </Routes>
  );
};
