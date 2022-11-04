import React, { useContext } from "react";
import Alert from "./Alert";
import AuthContext from "../Context/AuthContexts/AuthContext";

const ShowAlert = () => {
  const context = useContext(AuthContext);
  const { message } = context;

  return <Alert message={message} />;
};

export default ShowAlert;
