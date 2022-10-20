import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer';
import Tema from '../../models/Tema';
import { buscaId, deleteId } from '../../services/Service';
import { toast } from 'react-toastify';


function DeletarTema() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  useEffect(() => {
    if(token === ''){
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

  const [tema, setTema] = useState<Tema>();

  async function temaById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {'Authorization': token}
    })
  }

  useEffect(() => {
    if(id !== undefined) {
      temaById(id)
    }
  }, [id])

  function nao() {
    navigate('/temas')
  }

  async function sim() {
    try {
      await deleteId(`/temas/${id}`, {
        headers: {'Authorization': token}
      })
      toast.success('Tema deletado com sucesso!', {
        position: 'top-right', 
        autoClose: 2000, //2 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    })
      navigate('/temas')
    } catch (error) {
      toast.error('Falha ao deletar Tema.', {
        position: 'top-right', 
        autoClose: 2000, //2 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    })
      navigate('/temas')
    }
  }


  return (
    <Container>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">{tema?.descricao}</Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  style={{ backgroundColor: "#C21010", color: "white", fontWeight: 'bold' }}
                >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "#d8d8d8", color: "white", fontWeight: 'bold' }}
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Container>
  )
}

export default DeletarTema