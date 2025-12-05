
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Singlecourse from "./pages/Singlecourse";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Singlecourse" element={<Singlecourse />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
