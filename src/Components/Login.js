import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContexts/AuthContext";
const Login = () => {
  const context = useContext(AuthContext);
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { userlogin } = context;
    userlogin(user.email, user.password);
    console.log("logged in!");
  };
  return (
    <div className="container my-2">
      <form>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form1Example1"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form1Example2"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary btn-block"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
