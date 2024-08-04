import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Background from "./components/Background.jsx";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/reset.css";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Background />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;