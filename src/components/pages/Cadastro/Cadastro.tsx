import { Typography } from '@material-ui/core'
import { Box, Button, Grid, TextField } from '@mui/material'
//import { Link } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={6} className='bg-cadastro'></Grid>
        <Grid container xs={6} justifyContent='center'>
          
          <Grid item xs={8} justifyContent='center'>
            <form>
              <Typography variant='h2'>Cadastre-se</Typography>

              <TextField
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="cnpj"
                label="CNPJ (apenas números)"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type='password'
                margin="normal"
              />
              <TextField
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type='password'
                margin="normal"
              />

              <Box display='flex' justifyContent='space-around' marginTop={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                  </Button>
              </Box>
            </form>
          </Grid>
          
        </Grid>

      </Grid>
    </>
  )
}

export default Cadastro