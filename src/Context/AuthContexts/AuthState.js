import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const [state, setState] = useState("State value");
  const checkContext = () => {
    console.log("1.0 state value " + state);
  };
  console.log(state);

  const host = "https://inotebookbackend.hemraj748244.repl.co";

  const authtoken = "";
  const createuser = async (name, email, password, phonenumber) => {
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
    authtoken = await res.text();

    console.log("Creating the user & AUTH-TOKEN " + authtoken);
  };

  const userlogin = () => {
    console.login("User login");
  };

  return (
    <AuthContext.Provider
      value={{ setState, checkContext, createuser, userlogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
