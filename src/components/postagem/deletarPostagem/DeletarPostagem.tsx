import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer'
import Postagem from '../../models/Postagem'
import { buscaId, deleteId, post } from '../../services/Service'

function DeletarPostagem() {

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  const [postagem, setPostagem] = useState<Postagem>();

  useEffect(() => {
    if(token === ''){
      alert('Você precisa estar Logado!')
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
      alert('Postagem deletada com Sucesso')
    } catch (error) {
      alert('Erro ao Deletar')
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
                  size="large"
                  style={{backgroundColor: '#c21010', color: 'white'}}
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
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