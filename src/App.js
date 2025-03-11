import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";  // ✅ Import Footer
const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "60px" }}> {/* Offset for fixed navbar */}
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />  {/* ✅ Add Footer at the Bottom */}
    </div>

  );
};

export default App;