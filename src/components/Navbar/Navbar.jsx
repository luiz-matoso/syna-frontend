import React, { useState } from "react";

import styles from "./Navbar.module.css";

import logo from "../../assets/logo2.png";
import menuIcon from "../../assets/menuIcon.png";
import closeIcon from "../../assets/closeIcon.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogoutHandler = async () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");

    await new Promise((resolve) => setTimeout(resolve, 10));

    navigate("/", { replace: true });
  };

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="Menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/">Home</a>
          </li>

          {location.pathname !== "/dashboard" && (
            <li>
              <a href="#about">About</a>
            </li>
          )}

          {!token && location.pathname !== "/dashboard" && (
            <li>
              <button className={styles.button}>
                <Link to="/register" className={styles.buttonLink}>
                  Sign Up
                </Link>
              </button>
            </li>
          )}

          {token && location.pathname !== "/dashboard" && (
            <li>
              <button className={styles.button}>
                <Link to="/dashboard" className={styles.buttonLink}>
                  Dashboard
                </Link>
              </button>
            </li>
          )}

          {token && location.pathname === "/dashboard" && (
            <li>
              <button className={styles.logoutButton}>
                <Link onClick={onLogoutHandler}>Log Out</Link>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
