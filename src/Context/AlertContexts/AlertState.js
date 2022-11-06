import React, { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
  const [message, setMessage] = useState("");
  const [visible,setVisible] = useState(true);
  return (
    <AlertContext.Provider value={{message,setMessage,visible,setVisible}}>
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
