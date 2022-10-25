import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/token/TokenReducer";
import Postagem from "../../models/Postagem";
import { busca } from "../../services/Service";
import { toast } from "react-toastify";
import "./ListaPostagem.css";

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { MenuItem, Menu } from "@material-ui/core";
import DeletarPostagem from "../deletarPostagem/DeletarPostagem";
import CadastroPostagem from "../cadastroPostagem/CadastroPostagem";
import ModalAtualizarPostagem from "../cadastroPostagem/ModalAtualizarPostagem";

function ListaPostagem() {
  let navigate = useNavigate();
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  useEffect(() => {
    if (token === "") {

      toast.warn("Você precisa estar logado.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
      navigate("/login");
    }
  }, [token]);

  async function getPostagem() {
    await busca("/postagens", setPostagens, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getPostagem();
  }, [postagens.length]);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        maxWidth: 500,
        minWidth: 500,
      },
      media: {
        height: 0,
        paddingTop: '100%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[700],
      },
    }),
  );

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      {postagens.map((postagem) => (
        <Grid m={2} xs={6} key={postagem.id} className='feed' justifyContent='center' alignItems='center'>
          <Card className={classes.root}>
            <CardHeader
            className="backgroundCardLista"
              avatar={
                <>
                  <Avatar aria-label="recipe" className={classes.avatar}>
                  </Avatar>
                  <Typography>
                    {postagem.usuario?.nome}
                  </Typography>
                </>
              }
              title={postagem.titulo}
              subheader={postagem.data}
            />
            <CardMedia
              className={classes.media}
              image={postagem.foto}
              title={postagem.titulo}
            />
            <CardContent>
              <Typography variant="h6" color="textPrimary" component="p" textAlign='center'>
                {postagem.tema?.descricao}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {postagem.texto}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/editarPost/${postagem.id}`} className='text-decorator-none'>
                  <Box mx={1}>
                    <button className="atualizarButton cursor">
                      <span className="hover-underline-animation"> Atualizar </span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                      </svg>
                    </button>
                  </Box>
                </Link>
                <Link to={`/apagarPost/${postagem.id}`} className='text-decorator-none'>
                  <Box mx={1}>
                  <button className="deletarButton cursor">
                      <span className="hover-underline-animation"> Deletar </span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                      </svg>
                    </button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default ListaPostagem;