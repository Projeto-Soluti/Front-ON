import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Box } from '@mui/material';



function Navbar(){
    return (
 
      <>
      <AppBar position="static" style={{backgroundColor: "#E91E63"}}>
        <Toolbar variant="dense">
       
          <Box mx={1} style={{cursor: "pointer"}}>
            <Typography variant="h5">
            BlogPessoal
          </Typography>
          </Box>
          
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            home
          </Typography>
          </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            postagens
          </Typography>
          </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            temas
          </Typography>
          </Box>
          
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6">
            cadastrar temas
          </Typography>
          </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
            <Typography variant="h6">
            logout
          </Typography>
          </Box>
              </Toolbar>
      </AppBar>
        </>

    )
}


export default Navbar;