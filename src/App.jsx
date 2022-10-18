import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import Products from './pages/Products';
import Signin from './pages/Signin';
import Cart from './pages/Cart'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
