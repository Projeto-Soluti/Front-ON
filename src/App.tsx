import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/Navbar/Navbar';
import CadastroUsuario from './components/pages/cadastroUsuario/CadastroUsuario';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
//import './App.css';//

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh'}}>
          <Routes>
            {/* <Route path='/' element={ <Login /> } /> */}
            <Route path='/login' element={ <Login /> } />
            <Route path='/cadastrousuario' element={ <CadastroUsuario /> } />
            <Route path='/home' element={ <Home /> } />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
