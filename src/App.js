import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ShippingPolicy from './pages/ShippingPolicy';
import Returns from './pages/Returns';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { BASE_ROUTE } from './lib/const';
import './global.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={`/${BASE_ROUTE}`} element={<Home />} />
            <Route path={`/${BASE_ROUTE}/products`} element={<Products />} />
            <Route path={`/${BASE_ROUTE}/about`} element={<About />} />
            <Route path={`/${BASE_ROUTE}/contact`} element={<Contact />} />
            <Route path={`/${BASE_ROUTE}/faq`} element={<FAQ />} />
            <Route path={`/${BASE_ROUTE}/shipping`} element={<ShippingPolicy />} />
            <Route path={`/${BASE_ROUTE}/returns`} element={<Returns />} />
            <Route path={`/${BASE_ROUTE}/privacy`} element={<Privacy />} />
            <Route path={`/${BASE_ROUTE}/terms`} element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
