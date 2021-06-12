import React, { useContext }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/product-list.component";
import Cart from "./components/cart";
import { CartContext } from './contexts/CartContext';
import logo from './logo.svg';
import './App.css';

function App() {
  const {itemCount} = useContext(CartContext);
  return (
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
              <img src={logo} width="30" height="30"/>
            </a>
            <Link to="/" className="navbar-brand">Task</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Products</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/cart' className="nav-link">Cart ({itemCount})</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ProductList} />
          <Route path="/cart" component={Cart} />
        </div>
    </Router>
  );
}

export default App;
