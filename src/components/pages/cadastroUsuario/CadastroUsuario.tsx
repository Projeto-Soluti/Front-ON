import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { Box } from "@mui/material";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    cnpj: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    cnpj: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === user.senha) {
      try {
        await cadastroUsuario("usuarios/cadastrar", user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        });
      } catch (error) {
        toast.error(
          "Falha ao cadastrar o usuário. Por favor, confira os campos.",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
          }
        );
      }
    } else {
      toast.error(
        "Dados inconsistentes. Erro ao cadastrar, por favor, verifique as informações submetidas.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        }
      );
    }
  }

  return (
    <Grid container className="container">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              className="title"
            >
              Cadastrar
            </Typography>

            <TextField
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="nome"
              label="Nome da empresa"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />

            <TextField
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="usuario"
              label="Usuário (e-mail)"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />

            <TextField
              value={user.cnpj}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="cnpj"
              label="CNPJ (XX.XXX.XXX/XXXX-XX)"
              variant="outlined"
              name="cnpj"
              margin="normal"
              fullWidth
            />

            <TextField
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />

            <TextField
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              id="confirmarSenha"
              label="Confirmar senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />

            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" className="cadastrar">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
