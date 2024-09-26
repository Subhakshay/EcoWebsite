// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Speakers from "./pages/Speakers";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Watermark from "./components/Watermark";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-blue-50 pt-16"> {/* Add padding-top to avoid overlap with fixed navbar */}
                <MyNavbar />
                <Watermark/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/submission" element={<Submission />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;