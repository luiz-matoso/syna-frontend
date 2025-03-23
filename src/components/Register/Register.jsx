import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../TextField/TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";

import logo from "../../assets/logo2.png";

import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

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

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );
      reset();
      navigate("/login");
      toast.success("Registration Successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(registerHandler)}>
          <h1 className={styles.title}>Create your account</h1>

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
              label="Email"
              required
              id="email"
              type="email"
              message="*Email is required"
              placeholder="Type your email"
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
            className={styles.registerButton}
            disabled={loader}
            type="submit"
          >
            {loader ? "Loading..." : "Register"}
          </button>

          <p className={styles.alreadyText}>
            Already have an account?&nbsp;
            <Link className={styles.link} to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
