import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  const registrationFields = [
    { field: "firstName", label: "First Name", maxLength: 20, alphaOnly: true },
    { field: "lastName", label: "Last Name", minLength: 1, alphaOnly: true },
    { field: "userName", label: "Username", maxLength: 10 },
    { field: "email", label: "Email" },
    { field: "password", label: "Password", minLength: 10 },
  ];

  registrationFields.forEach(
    ({ field, label, maxLength, minLength, alphaOnly }) => {
      const value = values[field];

      if (!value) {
        errors[field] = "Required";
        return;
      }

      if (maxLength && value.length > maxLength) {
        errors[field] = `${label} must be ${maxLength} characters or less`;
      }

      if (minLength && value.length < minLength) {
        errors[field] = `${label} must be at least ${minLength} characters`;
      }

      if (alphaOnly && !/^[a-zA-Z\s]+$/.test(value)) {
        errors[field] = `Invalid ${label.toLowerCase()} (letters only)`;
      }

      if (
        field === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        errors[field] = "Invalid email address";
      }

      if (
        field === "password" &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(
          value
        )
      ) {
        errors[field] =
          "Password must include uppercase, lowercase, number, and special character";
      }
    }
  );

  return errors;
};

const Registration = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="userName">Username</label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
      {formik.touched.userName && formik.errors.userName ? (
        <div>{formik.errors.userName}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
