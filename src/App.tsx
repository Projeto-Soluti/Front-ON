import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/Navbar/Navbar';
import CadastroUsuario from './components/pages/cadastroUsuario/CadastroUsuario';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
// import ListaPostagem from './components/postagem/ListaPostagem/ListaPostagem';
// import CadastrarTema from './components/tema/cadastrarTema/CadastrarTema';
// import DeletarTema from './components/tema/deletarTema/DeletarTema';
// import ListaTema from './components/tema/listaTema/ListaTema';
// import { store } from './store/Store';
//import './App.css';//

function App() {
  return (
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <Navbar />
        <div style={{ minHeight: '100vh'}}>
          <Routes>
            {/* <Route path='/' element={ <Login /> } /> */}
            <Route path='/login' element={ <Login /> } />
            <Route path='/cadastrousuario' element={ <CadastroUsuario /> } />
            <Route path='/home' element={ <Home /> } />
{/* 
            <Route path='/cadastrarTema' element={ <CadastrarTema /> } />
            <Route path='/listaTema' element={ <ListaTema /> } />
            <Route path='/apagarTema/:id' element= { <DeletarTema /> } />

            <Route path='/postagens' element={ <ListaPostagem /> } /> */}
          </Routes>
        </div>
      <Footer />
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
