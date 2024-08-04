import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import "./styles/reset.css";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Background />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sebua_portfolio" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;