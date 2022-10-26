import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { Card, CardActions, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import { red } from '@material-ui/core/colors';
import './Eventos.css';
import React from 'react';


function Eventos() {

    //responsividade - qtd de itens que carrega na tela
    const responsive = {
        0: { items: 1 },
        500: { items: 1 },
        1024: { items: 1 },
    };

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
        }),
    );

    const classes = useStyles();

    //fotos do carrossel
    const items = [
        <div className="cardsolu2">
            <Card className={classes.root}>
                <CardHeader
                    className="backgroundCardLista"
                    avatar={
                        <>
                            <Avatar alt="" src="https://pindorama.org.br/wp-content/uploads/2021/01/logo-grande.jpg" style={{height:"50px", width:"50px"}}/>
                            <Typography>
                                Pindorama
                            </Typography>
                        </>
                    }
                    title='Festival da Sustentabilidade'
                    subheader='26/10/2022'
                />
                <CardMedia
                    className={classes.media}
                    image='https://odia.ig.com.br/_midias/jpg/2022/09/06/398x470/1_festival_de_sustentabilidade-26339349.jpeg'
                    title='Titulo da Post'
                />
                <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Como queremos fazer a diferença no mundo.
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        A Expo Sustentável é um espaço de negócios com foco na exibição de soluções sustentáveis e abrem um grande canal para a conexão entre pessoas e empresas que respeitam o meio ambiente.
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
                        <Box mx={1}>
                            <button className="atualizarButton cursor">
                                <span className="hover-underline-animation">  </span>
                            </button>
                        </Box>
                        <Box mx={1}>
                            <button className="deletarButton cursor">
                                <span className="hover-underline-animation"><a href="https://festivaldasustentabilidade.com.br/o-festival/" className='text-decorator-none' style={{ color: 'black' }} target='_blank'>Saiba mais</a></span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                            </button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </div>,

        <div className="cardsolu2">
            <Card className={classes.root}>
                <CardHeader
                    className="backgroundCardLista"
                    avatar={
                        <>
                            <Avatar alt="" src="https://3.bp.blogspot.com/-RobMXc1vzK0/Vzn8uy0zw3I/AAAAAAAACzE/XCPMntAgcFoMjUZLgYpAGz4YHNxik6kNACLcB/s1600/00192%2B-%2BLogo%2Bda%2BONU.jpg" style={{height:"50px", width:"50px"}}/>
                            <Typography>
                                ONU Brasil
                            </Typography>
                        </>
                    }
                    title='Brazil Water Week'
                    subheader='24/10/2022'
                />
                <CardMedia
                    className={classes.media}
                    image='https://tratamentodeagua.com.br/wp-content/uploads/2022/05/Brazil-Water-Week.jpg'
                    title='Brazil Water Week'
                />
                <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Como participar?
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        Durante cinco dias especialistas de vários países debaterão o tema água em seus vários aspectos, com foco no ODS 6 da ONU: Água e Esgoto para Todos até 2030
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
                        <Box mx={1}>
                            <button className="atualizarButton cursor">
                                <span className="hover-underline-animation">  </span>
                            </button>
                        </Box>
                        <Box mx={1}>
                            <button className="deletarButton cursor">
                                <span className="hover-underline-animation"><a href="https://brazilwaterweek.com.br/" className='text-decorator-none' style={{ color: 'black' }} target='_blank'>Saiba mais</a></span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                            </button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </div>,

        <div className="cardsolu2">
            <Card className={classes.root}>
                <CardHeader
                    className="backgroundCardLista"
                    avatar={
                        <>
                            <Avatar alt="" src="https://imgur.com/8FOq9o9.jpg" style={{height:"50px", width:"50px"}}/>
                            <Typography>
                                Generation Brasil
                            </Typography>
                        </>
                    }
                    title='Graduate from Generation Kenya'
                    subheader='26/10/2022'
                />
                <CardMedia
                    className={classes.media}
                    image='https://res.cloudinary.com/generation/image/upload/w_1150,q_auto,f_auto/brazil/2019/03/news-kenya-graduation-1a.jpg'
                    title='Titulo da Post'
                />
                <CardContent>
                    <Typography variant="h6" color="textPrimary" component="p">
                        4,000 Young Men and Women Graduate from Generation Kenya
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        Generation Kenya is a public-private program, supported by the U.S. government through its development agency, USAID, and in collaboration with McKinsey & Company, Swedish International Development Agency (SIDA) and Safaricom Foundation.
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
                        <Box mx={1}>
                            <button className="atualizarButton cursor">
                                <span className="hover-underline-animation">  </span>
                            </button>
                        </Box>
                        <Box mx={1}>
                            <button className="deletarButton cursor">
                                <span className="hover-underline-animation"><a href="https://brazil.generation.org/news/4000-young-men-and-women-graduate-from-generation-kenya/" className='text-decorator-none' style={{ color: 'black' }} target='_blank'>Saiba mais</a></span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                            </button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </div>,

    ];

    return (
        <div className="App2">

            <h2>Event<span>ON</span>s</h2>

            <AliceCarousel
                mouseTracking
                disableButtonsControls={true}
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                infinite
                autoPlay
                autoPlayStrategy="all"
                autoPlayInterval={1500}
                animationDuration={1500}
                animationType="fadeout"
                disableDotsControls={true}
            />
        </div>
    );

}
export default Eventos;