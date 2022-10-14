import React, { useState, useContext } from 'react';
import AuthContext from '../Context/AuthContexts/AuthContext';

const Signup = () => {
  const context = useContext(AuthContext);
  const { createuser } = context;
  const [user, setUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefaults();
    createuser(user.name, user.email, user.password, user.phonenumber);
    setUser({
      name: '',
      email: '',
      phonenumber: '',
      password: '',
    });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };
  return (
    <div className="container my-2">
      <form>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                name="name"
                id="form3Example1"
                class="form-control"
                onChange={handleChange}
              />
              <label class="form-label" htmlFor="form3Example1">
                Full name
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="tell"
                name="phonenumber"
                id="form3Example2"
                class="form-control"
                onChange={handleChange}
              />
              <label class="form-label" htmlFor="form3Example2">
                Phone number
              </label>
            </div>
          </div>
        </div>

        {/* Email input */}
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            name="email"
            class="form-control"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="form3Example3">
            Email address
          </label>
        </div>

        {/* Password input */}
        <div class="form-outline mb-4">
          <input
            type="password"
            id="form3Example4"
            name="password"
            class="form-control"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="form3Example4">
            Password
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          class="btn btn-primary btn-block mb-4"
          onSubmit={handleSubmit}
        >
          Sign up
        </button>

        {/* Register buttons */}
        <div class="text-center">
          <p>or sign up with:</p>
          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
