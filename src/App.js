import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Components/Main Menu/HomePage';
import Website from './Components/Site/Website';
import Login from './Components/Login/Login';
import Home from './Home';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="container nav-bar-header">
            <div className="row">
              <div className="col-xl-4 col-md-3 col-sm-2">
                <div className='img-space'>
                <img
                  className="home-page-icon"
                  src="https://images.pexels.com/photos/3068249/pexels-photo-3068249.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="tree"
                />
                </div>
              </div>
              <div className="col-xl-7 col-md-4 col-sm-2 d-flex p-3">
                <nav>
                  <ul className = "d-flex p-2 m-2">
                    <li>
                      <Link to="/" className='link-underline-remover m-2'>Home</Link>
                    </li>
                    <li>
                      <Link to="/Home" className='link-underline-remover m-2'>About</Link>
                    </li>
                    <li>
                      <Link to="/Website" className='link-underline-remover m-2'>Website</Link>
                    </li>
                    <li>
                      <Link to="/User Login" className='link-underline-remover m-2'>Login</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div style = {{marginBottom : "3rem"}}></div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Website" element={<Website />} />
          <Route path="/User Login" element={<Login />} />
        </Routes>
        <div style = {{marginBottom : "3rem"}}></div>
        <div className="container-fluid footer-bar-header">
            <div className="row">
              <div className="col-xl-4 col-md-3 col-sm-2">
              </div>
              <div className="col-xl-7 col-md-4 col-sm-2 d-flex p-3">
                <footer>
                  <ul className = "d-flex p-2 m-2">
                    <li>
                      <Link to="/" className='link-underline-remover m-2'>Home</Link>
                    </li>
                    <li>
                      <Link to="/Home" className='link-underline-remover m-2'>About</Link>
                    </li>
                    <li>
                      <Link to="/Website" className='link-underline-remover m-2'>Contact</Link>
                    </li>
                    <li>
                      <Link to="/User Login" className='link-underline-remover m-2'>Email</Link>
                    </li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App;
