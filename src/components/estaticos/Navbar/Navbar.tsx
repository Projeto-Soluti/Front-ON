import React from "react"
import {AppBar, Toolbar, Typography, Grid } from "@material-ui/core"
import { Link,  useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { TokenState } from "../../../store/token/TokenReducer"
import { Box } from "@mui/material"
import './Navbar.css'
import { addToken } from "../../../store/token/Action"
import { toast } from 'react-toastify'


function Navbar() {

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )
    
    let navigate = useNavigate()

    const dispatch = useDispatch()


    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        
        navigate('/login')
    }

    var navBarComponent


    if(token !== "") {
        navBarComponent = 
        <AppBar position="static" style={{ backgroundColor: "#212121", color: "white" }}>
        <Toolbar >
            <Box className='blogPessoal'>
                <Box>
                    <Typography variant="h5" >
                        SolutiON
                    </Typography>
                </Box>
            </Box>

            
            <Grid container justifyContent="flex-end" style={{ marginRight: '70px' }}>
            <Box className='menu' > 
                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to='/postagens' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to='/temas' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to='/cadastrarTema' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar Tema
                        </Typography>
                    </Box>
                </Link>



                    {/* <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box> */}

                    <Box mx={1} className="logout" onClick={goLogout}> 
                        <Typography style={{ paddingLeft: '12px', fontWeight: 'bold' }} variant="h6" color="inherit">
                            LOGOUT
                        </Typography>

                    </Box>

                </Box>
            </Grid>
            
        </Toolbar>
    </AppBar>
        
    }

    return(
        <>
            {navBarComponent}  
        </>
    )
}

export default Navbar