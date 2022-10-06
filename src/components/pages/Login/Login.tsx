import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Box } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service'


function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(  
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin, 
            [e.target.name]: e.target.value 
        })
    }

    useEffect(() => {
        if (token !== '') {
            navigate('/home');
        }
    }, [token]); 


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) { 
        e.preventDefault(); 
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados de usuário inválidos! Tente novamente.')
        }
    }



    return (
        <Grid container className="container" >
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
                <Box paddingX={20} alignItems="center" >
                    <form onSubmit={onSubmit}>
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
                            fullWidth />

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth />

                        <Box className="logar">
                            <Button type="submit" variant="contained" style= {{ backgroundColor: "#06283D", color: "#fff" }}>
                                Logar
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box className="orientacoes">
                    <Box marginRight={1}>
                        <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastrousuario'>
                        <Typography variant="subtitle1" gutterBottom align="center" className='bold'>Cadastre-se</Typography>
                    </Link>

                </Box>
            </Grid>
                <Grid xs={12} md={6} className="imagem"></Grid>
        </Grid>
    )
}

export default Login