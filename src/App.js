// import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
// import ProductPage from './pages/product/ProductPage' // Static loading
// import CustomerPage from "./pages/customer/CustomerPage";

const ProductPage = lazy(() => {return import('./pages/product/ProductPage')}) // Code splitting
const CustomerPage = lazy(() => {return import('./pages/customer/CustomerPage')})

function App() {

  const navigate = useNavigate();

  function goCustomer () {
    console.log('nav cus');
    // window.location.href = "/cus"
    navigate('/cus')
  }
  
  function goHome() {
    console.log('nav home');
    navigate('/')
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          Header
      </header>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductPage pod="pp" />} />
          <Route path="/cus" element={<CustomerPage name="Thila" />} />
        </Routes>
      </Suspense>

      <button onClick={goCustomer}>Customer</button>
      <button onClick={goHome}>Home</button>

    </div>
  );
}

export default App;
