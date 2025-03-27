import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../../../contextApi/ContextApi";
import styles from "./CreateNewShorten.module.css";
import { useForm } from "react-hook-form";
import TextField from "../../TextField/TextField";
import { data } from "react-router-dom";
import { Tooltip } from "@mui/material";

import api from "../../../api/api";
import toast from "react-hot-toast";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${
        res.shortUrl
      }`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL copied to clipboard!", {
          position: "bottom-center",
          duration: 3000,
        });
      });

      reset();
      setOpen(false);
    } catch (error) {
      toast.error("Create Short URL Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className={styles.form}
      >
        <h1 className={styles.title}>Create New Shorten URL</h1>
        <div>
          <TextField
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="Url is required"
            register={register}
            errors={errors}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.heroButton} type="text">
            {loading ? "Loading..." : "Create"}
          </button>
        </div>

        {!loading && (
          <Tooltip title="Close">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className={styles.closeButton}
            >
              <RxCross2 style={{ cursor: "url('/hand.cur'), pointer" }} />
            </button>
          </Tooltip>
        )}
      </form>
    </div>
  );
};

export default CreateNewShorten;
