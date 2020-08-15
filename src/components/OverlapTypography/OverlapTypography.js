import React, {Fragment, useState} from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root : {
        width: 12
    }

}))

const OverlapTypography = props => {
    //Variable
    const {children, overlay} = props
    const classes = useStyles();

    //State
    const [backtextProperty, setBacktextProperty] = useState({
        Height : 0
    })
    const [mainTextProperty, setMainTextProperty] = useState({
        Height : 0
    })


    //Function
    const getOverlayHeight = element => {
        if (element && backtextProperty.Height <= 0) { // need to check that we haven't already set the height or we'll create an infinite render loop
            // this.setState({ elementHeight: element.clientHeight });
            setBacktextProperty({
                ...backtextProperty,
                Height : element.clientHeight
            })
        }
    }
    const getMainHeight = element => {
        if (element && backtextProperty.Height <= 0) { // need to check that we haven't already set the height or we'll create an infinite render loop
            // this.setState({ elementHeight: element.clientHeight });
            setMainTextProperty({
                ...backtextProperty,
                Height : element.clientHeight
            })
        }
    }

    return(
        <Fragment>
            <Grid container>
                <Grid item container alignItems={"flex-start"} alignContent={"flex-start"} md={12} style={{height: parseInt(backtextProperty.Height > mainTextProperty.Height ? backtextProperty.Height + 20 : mainTextProperty.Height + 20)}}>
                    <Grid ref={getMainHeight} item md={12} style={{marginTop: 20}}>
                         {children}
                    </Grid>
                    <Grid md={12} ref={getOverlayHeight} item style={{position: "absolute", zIndex: 0, color: "rgba(0,0,0,.2)"}}>
                        {overlay}
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

OverlapTypography.propTypes = {
    children : PropTypes.node.isRequired,
    overlay : PropTypes.node.isRequired,
}

export default OverlapTypography;