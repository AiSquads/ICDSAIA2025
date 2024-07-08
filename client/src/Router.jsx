import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import Header from "./components/Static/Header";
import Footer from "./components/Static/Footer";
import Committee from "./components/Pages/Commitee";
import CallForPaper from "./components/Pages/CallForPaper";
import KeynoteSpeakers from "./components/Pages/KeynoteSpeakers";
import Venue from "./components/Pages/Venue";
import Submission from "./components/Pages/Submission";
import Publication from "./components/Pages/Publication";
import Register from "./components/Form_Components/Register";
import Contact from "./components/Pages/Contact";
import Date from "./components/Pages/Date";
import PageUnderConstruction from "./components/Other_Components/PageUnderConstruction";
import Faq from "./components/Form_Components/Faq";
import Gobichettipalayam from "./components/Other_Components/Gobichettipalayam";
import Tectovia from "./components/Other_Components/Tectovia";
import ThankYou from "./components/Form_Components/ThankYou";
import Registration from "./components/Pages/Registration";
import AdminPanel from "./components/Pages/AdminPanel";

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/admin_panel" element={<AdminPanel />} />

      <Route path="/" element={<Home />} />
      <Route path="/comm" element={<Committee />} />
      <Route path="/call" element={<CallForPaper />} />
      <Route path="/keynote" element={<KeynoteSpeakers />} />
      <Route path="/venue" element={<Venue />} />

      {/* Submission */}
      <Route path="/submission" element={<Submission />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/reg" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/date" element={<Date />} />

      {/* About */}
      <Route path="/dwnld" element={<PageUnderConstruction />} />
      <Route path="/accom" element={<PageUnderConstruction />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/gobi" element={<Gobichettipalayam />} />
      <Route path="/tectovia" element={<Tectovia />} />

      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
