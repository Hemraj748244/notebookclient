import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContexts/AuthContext";

const Signup = () => {
  const context = useContext(AuthContext);
  
  const { createuser ,message} = context;
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    cpassword:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createuser(user.name, user.email, user.password, user.phonenumber);
    setUser({
      name: "",
      email: "",
      phonenumber: "",
      password: "",
      cpassword:""
    });
   
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-2">
      <form>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                name="name"
                id="form3Example1"
                className="form-control"
                value={user.name}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="form3Example1">
                Full name
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="tell"
                name="phonenumber"
                id="form3Example2"
                className="form-control"
                value={user.phonenumber}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="form3Example2">
                Phone number
              </label>
            </div>
          </div>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form3Example3">
            Email address
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline row mb-4">
        <div className="col">
          <input
            type="password"
            id="form3Example4"
            name="password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form3Example4">
            Password
          </label>
        </div>
         <div className="col">
          <input
            type="password"
            id="form3Examplecp"
            name="cpassword"
            className="form-control"
            value={user.cpassword}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form3Example4">
            Confirm Password
          </label>
        </div>
        </div>

        {/* Submit button */}
        <button
          type="button"
          disabled={user.password!==user.cpassword || (user.password.length === 0 || user.cpassword.length === 0)}
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign up
        </button>

        {/* Register buttons */}
        <div className="text-center">
          <p>or sign up with:</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
