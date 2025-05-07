import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

// Login form validation
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 10) {
    errors.password = "Password must be at least 10 characters";
  }

  return errors;
};

// Login form for landing page
export default function Landing({ setUsername }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const mockUsername = values.email.split("@")[0];
      localStorage.setItem("username", mockUsername);
      setUsername(mockUsername); // ✅ this updates App.js state
      navigate("/Products", { state: { username: mockUsername } });
    },
  });

  return (
    <div className="tab-content" style={{ maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          ref={inputRef}
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}

        <label htmlFor="password" className="mt-2">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}

        <button className="btn btn-primary mt-3" type="submit">Login</button>
      </form>
    </div>
  );
}
