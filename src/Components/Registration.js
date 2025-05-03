import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  const fields = [
    { field: "firstName", label: "First Name", maxLength: 20, alphaOnly: true },
    { field: "lastName", label: "Last Name", minLength: 1, alphaOnly: true },
    { field: "userName", label: "Username", maxLength: 10 },
    { field: "email", label: "Email" },
    { field: "password", label: "Password", minLength: 10 },
  ];

  fields.forEach(({ field, label, maxLength, minLength, alphaOnly }) => {
    const value = values[field];

    if (!value) {
      errors[field] = "Required";
    } else {
      if (maxLength && value.length > maxLength) {
        errors[field] = `${label} must be ${maxLength} characters or less`;
      }
      if (minLength && value.length < minLength) {
        errors[field] = `${label} must be at least ${minLength} characters`;
      }
      if (alphaOnly && !/^[a-zA-Z\s]+$/.test(value)) {
        errors[field] = `Invalid ${label.toLowerCase()} (letters only)`;
      }
      if (field === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        errors[field] = "Invalid email address";
      }
      if (
        field === "password" &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/.test(value)
      ) {
        errors[field] = "Password must include uppercase, lowercase, number, and special character";
      }
    }
  });

  return errors;
};

export default function Registration({ setUsername }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("username", values.userName);
      setUsername(values.userName);
      navigate("/Products");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {["firstName", "lastName", "userName", "email", "password"].map((field) => (
        <div key={field}>
          <label htmlFor={field}>{field}</label>
          <input
            id={field}
            name={field}
            type={field === "password" ? "password" : "text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field]}
          />
          {formik.touched[field] && formik.errors[field] && <div>{formik.errors[field]}</div>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

