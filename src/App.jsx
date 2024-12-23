
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Market from './Pages/Market';
import Ranking from './Pages/Ranking';
import Wallet from './Pages/Wallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
