import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
        maxWidth: 345,
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
        <Box m={2} key={postagem.id} className='feed'>
          <Card className={classes.root}>
            <CardHeader
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
              image="https://classic.exame.com/wp-content/uploads/2019/01/dji_0331a-e1548360008295.jpg?quality=70&strip=info&w=1024"
              title="Parque Empresarial"
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
                    <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: "#06283d", color: "white" }} >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/apagarPost/${postagem.id}`} className='text-decorator-none'>
                  <Box mx={1}>
                    <Button variant="contained" size='small' style={{backgroundColor: '#c21010', color: 'white'}}>
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;