import { Routes, Route } from 'solid-app-router';
import About from '../pages/About';
import Home from '../pages/Home';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Pages;
