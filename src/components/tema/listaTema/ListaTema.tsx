import { Container, Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer';
import Tema from '../../models/Tema';
import { busca } from '../../services/Service';

function ListaTema() {

  let navigate = useNavigate();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  useEffect(() => {
    if(token === '') {
      alert('Você precisa estar Logado!')
      navigate('/login')
    }
  }, [token])

  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: {'Authorization': token}
    })
  }

  useEffect(() => {
    getTemas()
  }, [temas.length])


  return (
    <>
      <Container>
        {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
        {temas.map((tema) => (
          <Box m={2} key={tema.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  Tema {tema.id} - {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/atualizarTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="medium"
                        style={{ backgroundColor: '#D8D8D8', fontWeight: 'bold', color: '#000' }} 

                      >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/apagarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="medium"
                        style={{ backgroundColor: '#C21010', fontWeight: 'bold' }}
                      >
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Container>
    </>
  )
}

export default ListaTema