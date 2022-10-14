
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer';
import Tema from '../../models/Tema';
import { buscaId, post, put } from '../../services/Service';

function CadastrarTema() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  })

   useEffect(() => {
     if(token === '') {
       alert('Você precisa estar Logado!')
       navigate('/login')
    }
   }, [token])

  async function temaById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {'Authorization': token}
    })
  }

  useEffect(() =>{
    if(id !== undefined) {
      temaById(id)
    }
  }, [id])

  function atualizarTema(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value
    })
  }

  async function cadastrar(event:ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if(id !== undefined) {
      try {
        await put('/temas', tema, setTema, {
          headers: {'Authorization': token}
        });
        alert('Tema Atualizado com Sucesso')
        navigate('/temas')
      } catch (error) {
        alert('Falha ao atualizar o Tema, tente novamente!')
      }
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {'Authorization': token}
        })
        alert('Tema Cadastrado com sucesso')
        navigate('/temas')
      } catch (error) {
        alert('Falha ao Criar um Tema, tente novamente!')
      }
    }
  }



  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={cadastrar}>
          <Typography variant="h3" component="h1">
            Novo tema
          </Typography>

          <TextField
            label="Nome do tema"
            value={tema.descricao}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              atualizarTema(event)
            }
            id="descricao"
            name="descricao"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Box display="flex" justifyContent="space-around">
            <Button type="submit" variant="contained" className='cadastro'>
              Cadastrar
            </Button>
            <Link to="/home" className="text-decoration-none">
              <Button variant="contained" className='cancelar'>
                Cancelar
              </Button>
            </Link>
          </Box>
        </form>
      </Container>
    </>
  )
}

export default CadastrarTema