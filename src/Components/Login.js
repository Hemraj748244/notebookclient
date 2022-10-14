import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContexts/AuthContext';
const Login = () => {
  const context = useContext(AuthContext);
  const { setState, checkContext } = context;
  checkContext();
  setState('State value from Login');
  checkContext();
  return (
    <div className="container my-2">
      <form>
        <div className="form-outline mb-4">
          <input type="email" id="form1Example1" className="form-control" />
          <label className="form-label" htmlFor="form1Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form1Example2" className="form-control" />
          <label className="form-label" htmlFor="form1Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
