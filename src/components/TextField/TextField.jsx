import styles from "./TextField.module.css";

const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className={styles.input_box}>
      <label htmlFor={id}>{label}</label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: "Minimum 6 character is required" }
            : null,
          pattern:
            type === "email"
              ? {
                  value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                  message: "Invalid email",
                }
              : type === "url"
              ? {
                  value:
                    /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                  message: "Please enter a valid url",
                }
              : null,
        })}
      />

      {errors[id]?.message && <p>{errors[id]?.message}*</p>}
    </div>
  );
};

export default TextField;
