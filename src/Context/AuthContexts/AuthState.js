import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import AlertContext from "../AlertContexts/AlertContext";

const AuthState = (props) => {
  const navigate = useNavigate();
  const alertcontext = useContext(AlertContext);
  const {setMessage} = alertcontext;

  const host = "https://inotebookbackend.hemraj748244.repl.co";

  const createuser = async (name, email, password, phonenumber) => {
    try {
      const res = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phonenumber: phonenumber,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        const message = `An error has occured: ${json.message}`;
        setMessage(message);
        throw new Error(message);
      }
      localStorage.setItem("item", json.authtoken);
      navigate("/home");
      setMessage("Successfully signed up!");
    } catch (err) {
      console.log(err);
    }
  };

  const userlogin = async (email, password) => {
    try {
      const user = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const json = await user.json();
      if (!user.ok) {
        const message = `An error has occured: ${json.message}`;
        setMessage(message);
        throw new Error(message);
      }

      if (json.success !== true) {
        setMessage(`${json.message}`);
      } else {
        localStorage.setItem("item", json.authtoken);
        navigate("/home");
        setMessage("Successfully Signed in!");
        console.log(json.authtoken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ createuser, userlogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
