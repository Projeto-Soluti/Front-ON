import React from "react"
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { TokenState } from "../../../store/token/TokenReducer"
import { Box } from "@mui/material"
import './Navbar.css'
import { addToken } from "../../../store/token/Action"
import { toast } from 'react-toastify'
import { DarkModeSwitch } from 'react-toggle-dark-mode'


function Navbar() {

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    let navigate = useNavigate()

    const dispatch = useDispatch()


    function goLogout() {
        dispatch(addToken(''));
        toast.info('O usuário não está mais logado.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'light',
            progress: undefined,
        })

        navigate('/login')
    }

    var navBarComponent

    const [isDarkMode, setDarkMode] = React.useState(false)

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    }

    if (token !== "") {
        navBarComponent =
            <header className="header-home">
                <div className='title-home'>
                    <h1>Soluti<span className='title2-home'>ON</span></h1>
                </div>

                <Grid xs={12} className="nav-home">
                        <ul className="lista-menu-home">
                            <Link to='/home' className='text-decorator-none'>
                                    <li className='cursor'>
                                        <a>Home</a>
                                    </li>
                            </Link>

                            <Link to='/postagens' className='text-decorator-none'>
                                    <li className='cursor'>
                                        <a>Postagens</a>
                                    </li>
                            </Link>

                            <Link to='/temas' className='text-decorator-none'>
                                    <li className='cursor'>
                                        <a>Temas</a>
                                    </li>
                            </Link>

                            <Link to='/'>
                                    <li className='botaologout' onClick={goLogout}>
                                        <a href="#login" className='logout-home'>Logout</a>
                                    </li>
                            </Link>
                        </ul>

                </Grid >

                <DarkModeSwitch
                    className='effect-home'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={50}
                />

            </header >

    }

    return (
        <>
            {navBarComponent}
        </>
    )
}

export default Navbar