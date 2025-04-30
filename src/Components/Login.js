import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 10) {
    errors.password =
      "Your password must have a minimum length of 10 characters";
  }
  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();

  const handleLogin = (username, setUsername) => {
    setUsername(values.username); // from props/context
    navigate("/Home"); // redirect to Home
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email"> Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="password"> Password </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      {formik.errors.email ? <div> {formik.errors.email} </div> : null}
      {formik.errors.password ? <div> {formik.errors.password} </div> : null}

      <button type="submit"> Submit </button>
    </form>
  );
};

export default LoginForm;
