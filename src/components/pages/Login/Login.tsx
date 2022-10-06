import React from "react";
//import { Link } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={6} alignItems = "center" >
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuario"
              variant="outlined"
              name=" usuario"
              margin="normal"
              fullWidth
            >
              {" "}
            </TextField>
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name=" senha"
              margin="normal"
              type="password"
              fullWidth
            >
              {" "}
            </TextField>
            <Box marginTop={2} textAlign="center">
            <Link to='/home'>
              <Button type="submit" variant="contained" color="primary">
                Entrar
              </Button>
            </Link>      
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
            </Box>
            <Link to="/cadastrar" style={{ textDecoration: "none" }}>
                <Typography>Cadastre-se</Typography>
            </Link>
          </Box>
        </Box>
        
      </Grid>

      <Grid xs={6} className="imagem"></Grid>
    
      </Grid>
  );
}
export default Login;