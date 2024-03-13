import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './pages/cardProduct/index';
import Home from './pages/home/index';

function App() {
  return (
    <Router>
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<CardProduct />} />
      </Routes>
      <Footer />
    </main>
    </Router>
  );
}

export default App;
