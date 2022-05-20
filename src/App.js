import './App.css';
import Features from './pages/Features';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Team from './pages/Team';


function App() {
  return (
    <div className="App overflow-hidden w-full text-white bg-darkbg">
    <Home />
    <Features />
    <Team />
    <Footer />
    </div>
  );
}

export default App;
