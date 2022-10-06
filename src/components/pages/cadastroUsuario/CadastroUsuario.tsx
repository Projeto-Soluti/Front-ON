
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import {Box} from '@mui/material'

function CadastroUsuario() {
    
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>(
        {
            id:0,
            nome: '',
            usuario: '',
            cnpj: '',
            senha:'',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id:0,
            nome: '',
            usuario: '',
            cnpj: '',
            senha:'',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    async function confirmar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if(confirmarSenha === user.senha) {
            cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso!')
        } else {
            alert('Dados inconsistentes! Favor verificar as informações de cadastro.')
        }
    }
    
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={confirmar}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                            <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                            <TextField value={user.cnpj} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='cnpj' label='cnpj' variant='outlined' name='cnpj' margin='normal' type='password' fullWidth />

                            <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                    <Button type='submit' variant='contained' className='cadastrar' >
                                        Cadastrar
                                    </Button>

                            </Box>
                        </form>
                    </Box>
                </Grid>
        </Grid>
    )
}

export default CadastroUsuario;