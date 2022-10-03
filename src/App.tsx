import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/Navbar/Navbar';
import Cadastro from './components/pages/Cadastro/Cadastro';
import Login from './components/pages/Login/Login';
//import './App.css';//

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrar' element={<Cadastro />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
