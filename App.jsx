import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar user={user} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/account" element={<Account user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
