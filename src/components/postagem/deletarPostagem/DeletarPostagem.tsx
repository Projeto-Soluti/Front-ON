import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer'
import Postagem from '../../models/Postagem'
import { buscaId, deleteId, post } from '../../services/Service'
import { toast } from "react-toastify";

function DeletarPostagem() {

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const [postagem, setPostagem] = useState<Postagem>();

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
    navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if(id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
      headers: {'Authorization': token}
    })
  }

  async function sim() {
    navigate('/postagens')
  

    try {
      await deleteId(`/postagens/${id}`, {
        headers: {'Authorization': token}
      })
      toast.success('Postagem deletada com sucesso!', {
        position: 'top-right', 
        autoClose: 2000, //2 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    })
    } catch (error) {
      toast.error('Falha ao deletar postagem.', {
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

  function nao() {
    navigate('/postagens')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a postagem?
              </Typography>
              <Typography color="textSecondary">{postagem?.titulo}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="medium"
                  style={{backgroundColor: '#c21010', color: 'white'}}
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: "#06283d", color: "white" }}
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default DeletarPostagem