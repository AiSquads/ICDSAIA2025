// src/Router.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import Header from "./components/Static/Header";
import Massegs from "./components/Massegs";
import Experience from "./components/Experience";
import Footer from "./components/Static/Footer";
import Committee from "./components/Pages/Commitee";
import CallForPaper from "./components/Pages/CallForPaper";
import KeynoteSpeakers from "./components/Pages/KeynoteSpeakers";
import Venue from "./components/Pages/Venue";
import Contact from "./components/Pages/Contact";
import Submission from "./components/Pages/Submission";
import Publication from './components/Pages/Publication';
import PageUnderConstruction from './components/Other_Components/PageUnderConstruction';
import Gobichettipalayam from './components/Other_Components/Gobichettipalayam';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comm" element={<Committee />} />
      <Route path="/call" element={<CallForPaper />} />
      <Route path="/keynote" element={<KeynoteSpeakers />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/submission" element={<Submission />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/dwnld" element={<PageUnderConstruction />} />
      <Route path="/accom" element={<PageUnderConstruction />} />

      <Route path="/gobi" element={<Gobichettipalayam />} />
      
      <Route path="/experience" element={<Experience />} />
      <Route path="/messages" element={<Massegs />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
