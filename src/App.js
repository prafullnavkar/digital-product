import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/About'
import Contact from './component/Contact'
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
