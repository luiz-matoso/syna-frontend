import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../TextField/TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../../contextApi/ContextApi";

import logo from "../../assets/logo2.png";

import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      console.log(response.token);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Login Successful!");

      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(loginHandler)}>
          <h1 className={styles.title}>Log in and start sharing</h1>

          <div>
            <TextField
              label="Username"
              required
              id="username"
              type="text"
              message="*Username is required"
              placeholder="Type your username"
              register={register}
              errors={errors}
            />

            <TextField
              label="Password"
              required
              id="password"
              type="password"
              message="*Password is required"
              placeholder="Type your password"
              register={register}
              min={6}
              errors={errors}
            />
          </div>

          <button
            className={styles.loginButton}
            disabled={loader}
            type="submit"
          >
            {loader ? "Loading..." : "Login"}
          </button>

          <p className={styles.noAccountText}>
            Don't have an account?&nbsp;
            <Link className={styles.link} to="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
