import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';

console.log('App component loadedd');

const App = () => {
  return (
    <main className="bg-gradient h-full">
      <Router basename="/3d_portfolio/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
