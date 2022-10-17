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

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>The Tibian Blog!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Agua mole, pedra dura. Noob bate, Exura cura.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Box marginRight={1}>
                            <ModalTema />
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item xs={6} className="divlogo">
                    <img className="logo" src="https://i.imgur.com/XLLH2qM.png" alt="rurielogo" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;