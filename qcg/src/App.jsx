import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import Github from "./pages/Github";
import Resources from "./pages/Resources";
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap Router around your app */}
      <Navbar />  {/* Now Navbar works inside Router */}
      <h1>QCG</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/github" element={<Github />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
