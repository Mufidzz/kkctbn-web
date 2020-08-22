import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
    paper: {width: 300, padding: 4},
}));

const ConfirmationModal = props => {

    const {textBody, children, open, setOpen, displayAction, textTitle} = props

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState({
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    });


    // const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={classes.paper}>
            <DialogTitle>
                <b>{textTitle}</b>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {textBody}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {displayAction ?
                    <Button
                        onClick={handleClose}
                        fullWidth
                        variant="contained"
                        style={{backgroundColor: "#CF2424", color: "#FFFFFF"}}>
                        OK
                    </Button>
                    : null}

            </DialogActions>
        </div>
    );

    return (
        <div>
            {children}
            <Dialog
                open={open}
                onClose={handleClose}>
                {body}
            </Dialog>
        </div>
    );
}

ConfirmationModal.defaultProps = {
    displayAction: true,
    textTitle: "Information"
}

export default ConfirmationModal;
