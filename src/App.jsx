import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
