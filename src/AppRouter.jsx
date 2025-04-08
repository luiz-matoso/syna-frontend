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
import PrivateRoute from "./PrivateRoute";
import Error from "./components/Error/Error";
import HowItWorks from "./components/HowItWorks/HowItWorks";

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
                  <HowItWorks />
                  <Footer />
                </>
              }
            />

            <Route
              path="/register"
              element={
                <PrivateRoute publicPage={true}>
                  <Register />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PrivateRoute publicPage={true}>
                  <Login />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <>
                  <PrivateRoute publicPage={false}>
                    <Navbar />
                    <Dashboard />
                  </PrivateRoute>
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Error message="We couldn't find the page you're looking for." />
                </>
              }
            />
            <Route
              path="/error"
              element={
                <>
                  <Navbar />
                  <Error />
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
