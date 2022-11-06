import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import EditNote from "./EditNote";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("item");
  if (!token) {
    navigate("/login");
  }
  return (
    <>
      <div className="container">
        
        <AddNote auth={token} />
        <h2 className="my-3">Your Notes :</h2>
        <Note auth={token} />
        <EditNote auth={token} />
      </div>
    </>
  );
}
