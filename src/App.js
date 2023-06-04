import React from 'react';
import './App.css';
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createContext, useState, useEffect} from "react";

import HomePage from './Components/Main Menu/HomePage';
import Website from './Components/Site/Website';
import Login from './Components/Login/Login';
import Home from './Home';
import Custom from './Components/Custom/Custom';
import Error from './Error';
import WebsiteParams from './Components/Custom/WebsiteParams';



const contextImageProviders = createContext();

  
  function App() {

    const[tree, setTree] = useState([]);

    useEffect(()=>{
      const ContextData = async() => {
        const TreeApi = await fetch ("https://fakestoreapi.com/products");
        const TreeJson = await TreeApi.json();
        setTree(TreeJson);
      };
      ContextData();
    },[])
    
  const NavlinkCustomStyle = ({isActive}) => {
    return  { color : isActive ? "rgba(41, 29, 29, 0.256)" : "whitesmoke",
      opacity : isActive ? "0.88" : "1"
  }
  }

  return (
    <>
    <contextImageProviders.Provider value = {tree}>
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
                      <NavLink style = {NavlinkCustomStyle} to="/" className='link-underline-remover m-2'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink style = {NavlinkCustomStyle} to="/Home" className='link-underline-remover m-2'>About</NavLink>
                    </li>
                    <li>
                      <NavLink style = {NavlinkCustomStyle} to="/Website" className='link-underline-remover m-2'>Website</NavLink>
                    </li>
                    <li>
                      <NavLink style = {NavlinkCustomStyle} to="/User Login" className='link-underline-remover m-2'>Login</NavLink>
                    </li>
                  </ul>
                  <Outlet/>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div style = {{marginBottom : "3rem"}}></div>
          <div className = 'content-wrap'>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/Home" >
          <Route index element={<HomePage />} />
          <Route path="Custom" element={<Custom/>} />
          </Route>
          <Route path="/Website" element={<Website />} />
            <Route path = "/Website">
              <Route path=":id" element={<WebsiteParams />} />
              <Route index element={<Website />} />
            </Route>
          <Route path="/User Login" element={<Login />} />
          <Route path="*" element={<Error/>} />
        </Routes>
          </div>
        <div style = {{marginBottom : "3rem"}}></div>
        <div className="container-fluid  footer-bar-header">
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
      </contextImageProviders.Provider>
      </>
  );
}

export default App;
export {contextImageProviders};
