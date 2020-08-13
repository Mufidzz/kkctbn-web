import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({

}))

const Contact = props => {
    //Variable
    const classes = useStyles();
    return (
        <Fragment>
            <Box display="flex" className={classes.blogTitle}>
                <Typography variant="h3">
                    Masih ada yang ingin ditanyakan ?
                </Typography>
            </Box>
        </Fragment>
    )
}

export default Contact;