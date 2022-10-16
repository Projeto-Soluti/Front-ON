import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/estaticos/Footer/Footer'
import Navbar from './components/estaticos/Navbar/Navbar'
import CadastroUsuario from './components/pages/cadastroUsuario/CadastroUsuario'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import ListaPostagem from './components/postagem/ListaPostagem/ListaPostagem'
import CadastrarTema from './components/tema/cadastrarTema/CadastrarTema'
import DeletarTema from './components/tema/deletarTema/DeletarTema'
import ListaTema from './components/tema/listaTema/ListaTema'
import { store } from './store/Store'
//import './App.css';//
import Principal from './components/pages/Principal/Principal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CadastroPostagem from './components/postagem/cadastroPostagem/CadastroPostagem'
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem'



function App() {
  return (
    <Provider store={store} > 
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
            <div style={{ minHeight: '80vh'}}>
              <Routes>
                <Route path='/' element={ <Principal /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/cadastrousuario' element={ <CadastroUsuario /> } />
                <Route path='/home' element={ <Home /> } />

                <Route path='/cadastrarTema' element={ <CadastrarTema /> } />
                <Route path='/temas' element={ <ListaTema /> } />
                <Route path='/apagarTema/:id' element= { <DeletarTema /> } />

                <Route path='/postagens' element={ <ListaPostagem /> } />
                <Route path='/editarPost' element={ <CadastroPostagem /> } />
                <Route path='/editarPost/:id' element={ <CadastroPostagem /> } />
                <Route path='/apagarPost/:id' element={ <DeletarPostagem /> } />

              

              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </Provider> 
  )
}

export default App
