"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useField } from "formik";

const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (value, data, event) => {
    console.log("Value:", value);
    helpers.setValue(value);
  };

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <PhoneInput
        {...field}
        {...props}
        onChange={handleChange}
        value={field.value}
      />
      {meta.touched && meta.error && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </div>
  );
};

export default PhoneInputField;
