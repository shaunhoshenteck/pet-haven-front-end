import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required Field"),
  password: Yup.string()
    .min(6, "Password is too short!")
    .required("Required Field"),
});

class UserLogin extends Component {
  state = {
    success: false,
    validation: false,
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="container form_container">
        <h1>Welcome Back</h1>
        <hr></hr>
        <h4>Sign-in</h4>
        <Formik
          initialValues={{ email: "shaun@gmail.com", password: "shaunshaun" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="twelve columns">
                    <input
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      value={values.email}
                      className="u-full-width"
                    ></input>
                    {errors.email && touched.email ? (
                      <div className="error-label">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="form-group">
                  <div className="twelve columns">
                    <input
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      value={values.password}
                      className="u-full-width"
                    ></input>
                    {errors.password && touched.password ? (
                      <div className="error-label">{errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <button type="login">Login</button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default UserLogin;
