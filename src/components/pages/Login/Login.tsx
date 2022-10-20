import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Box } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import UserLogin from '../../models/UserLogin'
import { login } from '../../services/Service'
import { addId, addToken } from '../../../store/token/Action'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'



function Login() {

  let navigate = useNavigate()
  const dispatch = useDispatch();
  const [token, setToken] = useState('')
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    cnpj: '',
    senha: '',
    foto: '',
    token: ''
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    cnpj: '',
    senha: '',
    foto: '',
    token: '',
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    try{
      await login('usuarios/logar', userLogin, setRespUserLogin)
      toast.success('Usuário logado com sucesso!', {
        position: 'top-right', 
        autoClose: 2000, //2 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    })
      
      
    }catch(error){
      toast.error('Dados de usuário inconsistentes. Erro ao logar.', {
        position: 'top-right', 
        autoClose: 2000, //2 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    })
    }
  }

  useEffect(() => {
    if(token !== ''){
      dispatch(addToken(token));
      navigate('/home')
    }
  }, [token])

  useEffect(() => {
    if(respUserLogin.token !== ''){
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home')
    }
  },[respUserLogin.token])

  useEffect(() => {
    if(token !== ''){
      dispatch(addToken(token))
      navigate('/home')
    }
  }, [token])

  useEffect(() => {
    if(respUserLogin.token !== ''){
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home')
    }
  }, [respUserLogin.token])

    return (
        
        <Grid container className="container body" >
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
                <Box paddingX={20} alignItems="center" >
                    <form onSubmit={onSubmit} className="vrido">
                        <Typography 
                            variant="h3" 
                            gutterBottom 
                            color="textPrimary" 
                            component="h3" 
                            align="center" 
                            className="bold"
                        >
                            Entrar
                        </Typography>

                        <TextField

                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="Usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                            className="fundo"
                            
                             />

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth 
                            className="fundo"/>

                        <Box className="logar">
                            <Button type="submit" variant="contained" size='large' style= {{ backgroundColor: "#06283D", color: "white" }}>
                                Logar
                            </Button>
                        </Box>
                        <Box className="orientacoes">
                    <Box>
                        <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                    </Box>
                    <Box>
                    <Link to='/cadastrousuario'>
                        <Typography variant="subtitle1" gutterBottom align="center" className='bold'>Cadastre-se</Typography>
                    </Link>
                    </Box>
                </Box>
                    </form>

                </Box>
                
            </Grid>
                <Grid xs={12} md={6} className="imagem">
               
                </Grid>
                
        </Grid>
    )
}

export default Login

