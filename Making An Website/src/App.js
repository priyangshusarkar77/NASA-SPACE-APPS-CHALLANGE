import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="/juno" element={<AboutUs />} />
        <Route path="/scientific" element={<Laurels />} />
        <Route path="/aesthetic" element={<SpecialMenu />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
