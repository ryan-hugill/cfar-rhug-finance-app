import { HomePage } from './components/HomePage.js'
import { TransactionsPage } from './components/TransactionsPage.js';
import {Route, Routes} from "react-router";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spend" element={<TransactionsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
