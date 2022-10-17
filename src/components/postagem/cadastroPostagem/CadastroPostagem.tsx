import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Postagem from '../../models/Postagem'
import Tema from '../../models/Tema'
import { TokenState } from '../../../store/token/TokenReducer';
import { busca, buscaId, post, put } from '../../services/Service'
import { toast } from 'react-toastify'
import './CadastroPostagem.css'



function CadastroPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>()
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  const [tema, setTema] = useState<Tema>({
    id:0,
    descricao: '',
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
  })


  useEffect(() => {
    if(token === '') {
      // alert('Você precisa estar logado!')
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


  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    })
  }, [tema])


  async function findByIdPostagem(id: string) {
    await buscaId(`/postagens/${id}`, setPostagem, {
      headers: {"Authorization": token,},
    });
  }

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id)
    }
  }, [id])

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {'Authorization': token}
    })
  }

  function atualizarPostagem(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
        put('/postagens', postagem, setPostagem, {
            headers: { 
                Authorization: token 
            },
        })
        toast.success('Postagem atualizada com sucesso!', {
          position: 'top-right', 
          autoClose: 2000, //2 segundos
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
      })


    } else {
        post(`/postagens`, postagem, setPostagem, {
            headers: { 
                Authorization: token 
            },
          })
          toast.success('Postagem cadastrada com sucesso!', {
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
    back()
}

function back() {
    navigate('/postagens')
}


  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Typography
            variant='h3'
            color='textSecondary'
            component='h1'
            align='center'
            >
              Postagens
          </Typography>

          <TextField 
            value={postagem.titulo}
            onChange={(event: ChangeEvent<HTMLInputElement>) => atualizarPostagem(event)}
            variant='filled'
            id='titulo'
            name='titulo'
            label='Titulo'
            fullWidth
            margin='normal'
            required
          />

          <TextField 
            value={postagem.texto}
            onChange={(event: ChangeEvent<HTMLInputElement>) => atualizarPostagem(event)}
            variant='filled'
            id='textoPostagem'
            name='texto'
            label='Texto'
            fullWidth
            margin='normal'
            required
          />

          <FormControl fullWidth variant='filled'>
            <InputLabel id='tema-label'>Tema</InputLabel>

            <Select
              labelId='tema-label'
              id='tema-label'
              onChange={(event) => buscaId(`/temas/${event.target.value}`, setTema, {
                headers: {'Authorization': token}
              })}
            >

              {temas.map((item) => (
                <MenuItem value={item.id} style={{ display: 'block'}}>
                  {item.descricao}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button
              type='submit'
              variant='contained'
              style={{ backgroundColor: "#06283d", color: "white" }}
              >
                Postar
            </Button>
          </FormControl>
            
        </form>
      </Container>
    </>
  )
}

export default CadastroPostagem