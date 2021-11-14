import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom'

import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/myprofile/' element={<Home/>}>
          </Route>
          <Route exact path='/about-me' element={<About/>}>
          </Route>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
