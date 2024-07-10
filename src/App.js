import './App.css';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
