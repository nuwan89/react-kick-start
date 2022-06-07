# React - SPA

## Introduction

This application is used to show case React router and code splitting features

## Development guide

```console
npx create-react-app my-react
npm start
```

### Add router

```console
npm i --save react-router-dom
```

Add routes

```js
// index.js
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

```jsx
//App.js
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import CustomerPage from "./pages/customer/CustomerPage";

function App() {
  const navigate = useNavigate(); //This only works in function components!! NOT on CLASS based components
  // To use that in a ES6 class, wrap class with a function explained below

  function goCustomer() {
    console.log("nav cus");
    // window.location.href = "/cus"
    navigate("/cus");
  }

  function goHome() {
    console.log("nav home");
    navigate("/");
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cus" element={<CustomerPage />} />
      </Routes>
      <button onClick={goCustomer}>Customer</button>
      <button onClick={goHome}>Home</button>
    </main>
  );
}
```

#### useNavigation in ES6 class

You need to wrap you ES6 component to a function wrapper!

**Also on click needs to be wrapped in an arrow function to bind this**

```js
import React from "react";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
            {...props}
            router={{ location, navigate, params }}
          />
      );
    }
  
    return ComponentWithRouterProp;
  }

class ProductPage extends React.Component {
  
  goCustomer() {
    this.router.navigate('/cus')
    }

   render() {
     return (
       <div>
               <h1>Products Home</h1>
               <button onClick={() => {this.goCustomer()}}>Go Customer</button>
           </div>
       )
   }
}

export default withRouter(ProductPage);
```

#### Code splitting/ES6 dynamic modules with Router 

```js
//App.js

import React, { lazy, Suspense } from 'react';

const ProductPage = lazy(() => import('./pages/product/ProductPage'))
const CustomerPage = lazy(() => import('./pages/customer/CustomerPage'))

function App() {

  return (
  <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductPage pod="pp" />} />
        <Route path="/cus" element={<CustomerPage name="Thila" />} />
      </Routes>
    </Suspense>
  )
}
```


