import React, { useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();
    /*const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );*/

    /*useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])*/

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Seja Bem-Vindo ao SolutiON!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Sua interface de comunicação empresarial</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className="divlogo">
                    <img className="logo" src="https://i.imgur.com/XLLH2qM.png" alt="rurielogo" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;