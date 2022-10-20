
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/token/TokenReducer';
import Tema from '../../models/Tema';
import { buscaId, post, put } from '../../services/Service';
import { toast } from 'react-toastify'


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
      //  alert('Você precisa estar Logado!')
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
        // alert('Tema Atualizado com Sucesso')
        toast.success('Tema atualizado com sucesso!', {
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
        toast.error('Falha ao atualizar o tema. Tente novamente.', {
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
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {'Authorization': token}
        })
        // alert('Tema Cadastrado com sucesso')
        toast.success('Tema cadastrado com sucesso!', {
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
        toast.error('Falha ao cadastrar tema. Tente novamente.', {
          position: 'top-right', 
          autoClose: 2000, //2 segundos
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
      })      }
    }
  }



  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={cadastrar}>
          <Typography variant="h3" component="h1">
            Cadastrar tema
          </Typography>

          <TextField
            label="Descrição"
            value={tema.descricao}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              atualizarTema(event)
            }
            id="descricao"
            name="descricao"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <Box display="flex" justifyContent="space-around" >
            <Button type="submit" variant="contained" className='cadastro' style={{ backgroundColor: '#D8D8D8', fontWeight: 'bold', color: '#000' }}>
              Cadastrar
            </Button>
            <Link to="/home" className="text-decoration-none">
              <Button variant="contained" style={{ backgroundColor: '#C21010', fontWeight: 'bold' }} >
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