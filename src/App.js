import { HeroSection } from './components/HeroSection.js';
import { Footer } from './components/Footer.js';
import { Header } from './components/Header.js'
import { HomePage } from './pages/HomePage.js'
import { TransactionsPage } from './pages/TransactionsPage.js';
import {Route, Routes} from "react-router";



function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spend" element={<TransactionsPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
