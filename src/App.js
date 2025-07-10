import { HeroSection } from './components/HeroSection.js';
import { Footer } from './components/Footer.js';
import { Header } from './components/Header.js'
import { Route, Routes } from "react-router";
import { Spend } from './routes/Spend.js';
import { Home } from './routes/Home.js';



function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spend" element={<Spend />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
