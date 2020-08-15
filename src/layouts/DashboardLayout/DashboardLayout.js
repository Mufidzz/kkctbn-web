import React, {Suspense, useState} from 'react'
import {formatMs, makeStyles} from "@material-ui/core/styles";
import DashboardDrawer from "./components/DashboardDrawer/DashboardDrawer";
import Grid from "@material-ui/core/Grid";
import {LinearProgress, Typography} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import useRouter from "../../utils/useRouter";
import {renderRoutes} from "react-router-config";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    body: {


    },
    content :{
        paddingLeft : theme.spacing(3),
        paddingRight : theme.spacing(3),

},
    footer : {
        marginTop : theme.spacing(3),
        padding : theme.spacing(1),
        backgroundColor: "#D72C2C",
        color: "#FFFFFF"
    },
    breadcrumbsSpacing : {
        paddingBottom : theme.spacing(1),
    }
}))

const DashboardLayout = props => {
    const classes = useStyles();

    const {route} = props

    const [footer, setFooter] = useState({
        height : 0
    })

    const getHeight = element => {
        if (element && footer.height <= 0) { // need to check that we haven't already set the height or we'll create an infinite render loop
            setFooter({
                ...footer,
                height: element.clientHeight
            })
        }
    }

    return (
        <DashboardDrawer>
            <Grid container justify={"flex-start"} alignItems={"flex-start"} style={{minHeight: `calc(100vh - ${footer.height}px - 64px)`}} className={classes.content}>
                <Grid item md={12}>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbsSpacing}>
                        <Link color="inherit" to="/">
                            Dashboard
                        </Link>
                        <Typography color="textPrimary">User</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item container md={12}>
                        <Suspense fallback={<LinearProgress/>}>
                            {renderRoutes(route.routes)}
                        </Suspense>
                </Grid>
            </Grid>
            <Grid ref={getHeight} container className={classes.footer} justify={"center"} alignItems={"center"}>
                <Typography variant={"subtitle2"}> Ini Footer </Typography>
            </Grid>
        </DashboardDrawer>
    )
}

DashboardLayout.propTypes = {
    route: PropTypes.object
};

export default DashboardLayout;