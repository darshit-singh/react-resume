import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
