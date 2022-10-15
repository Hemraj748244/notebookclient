import React, { useContext } from "react";
import Alert from "./Alert";
import AuthContext from "../Context/AuthContexts/AuthContext";

const ShowAlert = (props) => {
  const context = useContext(AuthContext);
  const { message } = context;

  return (
    <div className="container">
      <Alert message={message} />
    </div>
  );
};

export default ShowAlert;
