import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/NotesContext/NoteState';
import AuthState from './Context/AuthContexts/AuthState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

export default function App() {
  return (
    <AuthState>
      <NoteState>
        <div className="App">
          <Router>
            <Navbar />
            <Alert message="this is alert" />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </NoteState>
    </AuthState>
  );
}
