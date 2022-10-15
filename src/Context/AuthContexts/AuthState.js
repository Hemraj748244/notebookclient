import React, { useState } from "react";
import AuthContext from "./AuthContext";
import Alert from "../../Components/Alert";

const AuthState = (props) => {
  const [message, setMessage] = useState("hello world");

  const host = "https://inotebookbackend.hemraj748244.repl.co";

  let authtoken = "";
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

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        setMessage(message);
        throw new Error(message);
      }
      authtoken = await res.text();
      setMessage("Successfully signed up!");
      console.log("Creating the user & AUTH-TOKEN " + authtoken);
    } catch (err) {
      console.log(err);
    }
  };

  const userlogin = () => {
    console.login("User login");
  };

  return (
    <AuthContext.Provider value={{ message, createuser, userlogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
