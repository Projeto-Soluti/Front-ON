import { Grid, Typography } from "@material-ui/core"
import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Box } from '@mui/material'
import './Footer.css'


function Footer (){
    return(
        <>
        
            <Grid container className="container"  >
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box className="subbox">
                            <Typography variant="h5" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box className="sociais">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://github.com/Projeto-Soluti" target="_blank">
                                <GitHubIcon style={{ fontSize: 48, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" gutterBottom className="textos">© 2022 Copyright</Typography>
                        </Box>
                        <Box>
                            {/* <hr></hr> */}
                            <a>
                                <Typography variant="subtitle2" gutterBottom className="textos">SolutiON</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer
