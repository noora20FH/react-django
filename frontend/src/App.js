import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import Manage from "./components/Manage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route path="/students" element={<Students/>} />
         <Route path="/manage" element={<Manage/>} />
         
         <Route path='/InputData' element={<Home/>} />
         <Route path='/Register' element={<Register/>} />
        <Route path='/Dashboard' element={[<Navbar/>, <Dashboard/>]}/>
       </Routes>
    </BrowserRouter>
  );
};

export default App;