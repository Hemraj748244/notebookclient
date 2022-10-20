import React from "react";
// import AuthContext from "./Context/AuthContexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/NotesContext/NoteState";
import AuthState from "./Context/AuthContexts/AuthState";
import ShowAlert from "./Components/ShowAlert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function App() {
  // const context = useContext(AuthContext);
  // const { message } = context;
  return (
    <Router>
      <AuthState>
        <NoteState>
          <div className="App">
            <Navbar />
            <ShowAlert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </NoteState>
      </AuthState>
    </Router>
  );
}
