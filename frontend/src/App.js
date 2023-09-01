//import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductSCreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazim</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductSCreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
