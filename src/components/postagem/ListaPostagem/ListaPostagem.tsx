import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer';
import Postagem from '../../models/Postagem';
import { busca } from '../../services/Service';

function ListaPostagem() {

  let navigate = useNavigate();
  const [postagens, setPostagens] = useState<Postagem[]>([])

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  useEffect(() => {
    if(token === '') {
      alert('Você precisa estar Logado!')
      navigate('/login')
    }
  },[token])

  async function getPostagem() {
    await busca('/postagens', setPostagens, {
      headers: {'Authorization': token}
    })
  }

  useEffect(() => {
    getPostagem()
  }, [postagens.length])

  return (
    <>
      {postagens.map(postagem => (
        <Box m={2} key={postagem.id}>
          <Card variant='outlined'>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Postagens
              </Typography>

              <Typography variant='body1' component='p'>
                Postado por:
              </Typography>
              <Typography variant='h5' component='h2'>
                {postagem.titulo}
              </Typography>
              <Typography variant='body2' component='p'>
                {postagem.texto}
              </Typography>
              <Typography variant='body1' component='p' >
                {postagem.tema?.descricao}
              </Typography>
            </CardContent>

            <CardContent>
              <CardActions>
                <Box>
                  <Link to={`/editarPost/${postagem.id}`} className='text-decorator-none'>
                    <Box mx={1}>
                      <Button variant='contained' size='small'>
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/apagarPost/${postagem.id}`} className='text-decorator-none'>
                    <Box mx={1}>
                      <Button variant='contained' size='small' style={{backgroundColor: 'red'}}>
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      ))}    
    </>
  )
}

export default ListaPostagem