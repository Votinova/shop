import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Shop } from './components/Shop/Shop';
import { Cart } from './components/Cart/Cart';
import { Profile } from './components/Shop/Products/Profile';
import { ShopContextProvider } from './context/context';



function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        </Routes>
        </Router>
      </ShopContextProvider> 
    </div>

  );
}

export default App;