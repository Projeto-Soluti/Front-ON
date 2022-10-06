import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Tooltip } from '@material-ui/core';
import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Box } from '@mui/material';

import './Navbar.css'
import AdbIcon from "@mui/icons-material/Adb"
import { Menu, Container, Avatar, Button, MenuItem, IconButton } from '@mui/material'
import { Typography } from '@material-ui/core';



function Navbar(){


    return (
      <>
      <AppBar position="static" style={{backgroundColor: "#E91E63"}}>
        <Toolbar variant="dense">

          <Box mx={1} style={{cursor: "pointer", fontWeight:"bold"}}>
            <Typography variant="h5">
              SolutiON
            </Typography>
          </Box>
          
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
              HOME
              </Typography>
            </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
                POSTAGENS
              </Typography>
            </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
              TEMAS
              </Typography>
            </Box>
          
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
                CADASTRAR TEMAS
              </Typography>
            </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
                LOGOUT
              </Typography>
            </Box>
        </Toolbar>
      </AppBar>

    </>

    )
}


export default Navbar;
