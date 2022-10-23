import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Modal } from '@mui/material';
import { Box } from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import CadastroPostagem from "../cadastroPostagem/CadastroPostagem";
import './ModalAtualizarPostagem.css'


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalAtualizarPostagem() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />

            </Box>

            <CadastroPostagem />

        </div>
    );

    return (
        <div className="radius">
            <Button className='atualizar'
                variant="outlined"
                onClick={handleOpen}><span>Atualizar</span><i></i>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalAtualizarPostagem;