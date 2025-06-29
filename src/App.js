import { HomePage } from './components/HomePage.js'
import { TransactionsPage } from './components/TransactionsPage.js';
import {Route, Routes} from "react-router";


function App() {
  return (
    <Routes className="app">
      <Route path="/" element={<HomePage />} />
      <Route path="/spend" element={<TransactionsPage />} />
    </Routes>
  );
}

export default App;
