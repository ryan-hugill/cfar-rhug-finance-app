import { Header, GenericStockPhoto, Footer } from './components/GenericStuff.js';
import { HomePage } from './components/HomePage.js'
import { TransactionsPage } from './components/TransactionsPage.js';
import {Route, Routes} from "react-router";



function App() {
  return (
    <div className="app">
      <Header />
      <GenericStockPhoto />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spend" element={<TransactionsPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
