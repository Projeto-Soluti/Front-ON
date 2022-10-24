import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/TokenReducer';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../postagem/modalPostagem/ModalPostagem';
import ModalTema from '../../tema/modalTema/ModalTema';
import TabPostagem from '../../postagem/tabPostagem/TabPostagem';
import { toast } from 'react-toastify';
import Card from './Card';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token == '') {
            toast.warn('Você precisa estar logado.', {
                position: 'top-right',
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            })
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='backgroundHome spaceBetween'>
                <Grid item xs={4}>
                    <Box style={{ margin: '45px' }}>
                        <Card />
                    </Box>
                </Grid>
                <Grid alignItems='center' xs={4} className='glass1'>
                    <Box paddingX={10}>
                        <Typography variant='h4' gutterBottom component='h4' align='center' className='titulo'>Bem vindo ao SolutiON!</Typography>
                        <Typography variant='h5' gutterBottom component='h5' align="center" className='subtitulo'>As conexões, começam aqui.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={3}>
                            <ModalPostagem />
                        </Box>
                        <Box marginRight={1}>
                            <ModalTema />
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;