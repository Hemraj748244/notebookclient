import React, { useContext } from "react";
import Alert from "./Alert";
import AlertContext from "../Context/AlertContexts/AlertContext";

const ShowAlert = () => {
  const context = useContext(AlertContext);
  const { message  } = context;

  return  <Alert message={message} />;
};

export default ShowAlert;
