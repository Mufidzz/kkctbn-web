import React, {Suspense, useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import DashboardDrawer from "./components/DashboardDrawer/DashboardDrawer";
import Grid from "@material-ui/core/Grid";
import {LinearProgress, Typography} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link, useHistory} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import PropTypes from "prop-types";
import {STORAGE_KEY} from "../../configs/local_storage";


const useStyles = makeStyles((theme) => ({
    content: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    footer: {
        padding: theme.spacing(1),
        backgroundColor: "#D72C2C",
        color: "#FFFFFF"
    },
    breadcrumbsSpacing: {
        paddingBottom: theme.spacing(1),
    },
    contentContainer: {
        paddingBottom: theme.spacing(4)
    }
}))

const DashboardLayout = props => {
    const classes = useStyles();
    const {route} = props
    const history = useHistory();

    const [height, setHeight] = useState({
        footer: 0,
        breadcrumbs: 0,
    })

    const [breadcrumbsLocation, setBreadcrumbsLocation] = useState(props.location.pathname.split("/").slice(1))

    useEffect(() => {
        setBreadcrumbsLocation(props.location.pathname.split("/").slice(1))
        return () => null
    }, [props.location.pathname])

    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY.JWT) === null || localStorage.getItem(STORAGE_KEY.JWT) === "") {
          alert("You are not Authorized");
          history.replace("/auth")
        }
        return () => null
    }, [localStorage.getItem(STORAGE_KEY.JWT)])

    const getFooterHeight = element => {
        if (element && height.footer <= 0) {
            setHeight({
                ...height,
                footer: element.clientHeight
            })
        }
    }

    const getBreadcrumbsHeight = element => {
        if (element && height.breadcrumbs <= 0) {
            setHeight({
                ...height,
                breadcrumbs: element.clientHeight
            })
        }
    }


    return (
        <DashboardDrawer>
            <Grid container>
                <Grid container item md={12} xs={12} sm={12} justify={"flex-start"} alignItems={"flex-start"}
                      style={{minHeight: `calc(100vh - ${height.footer}px - 64px)`}}
                      className={classes.content}>
                    <Grid ref={getBreadcrumbsHeight} item md={12}>
                        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbsSpacing}>

                            {breadcrumbsLocation.map((v, i) => {
                                return (
                                    i < breadcrumbsLocation.length - 1 ?
                                        <Link color="inherit"
                                              to={"/" + breadcrumbsLocation.slice(0, i + 1).join("/")}
                                        >
                                            {v.charAt(0).toUpperCase() + v.slice(1)}
                                        </Link>
                                        :
                                        <Typography
                                            color="textPrimary">{v.charAt(0).toUpperCase() + v.slice(1)}</Typography>
                                )
                            })}
                        </Breadcrumbs>
                    </Grid>
                    <Grid
                        className={classes.contentContainer}
                        style={{minHeight: `calc(100vh - ${height.footer}px - ${height.breadcrumbs}px - 64px)`}}
                        item container md={12}
                        alignContent={"flex-start"}
                        alignItems={"flex-start"}
                        justify={"flex-start"}>
                        <Suspense fallback={<LinearProgress/>}>
                            {renderRoutes(route.routes)}
                        </Suspense>
                    </Grid>
                </Grid>
                <Grid item md={12} xs={12} sm={12} ref={getFooterHeight} name={"footer"} container className={classes.footer} justify={"center"}
                      alignItems={"center"} >
                    <Typography variant={"subtitle2"}> Ini Footer </Typography>
                </Grid>

            </Grid>

        </DashboardDrawer>
    )
}

DashboardLayout.propTypes = {
    route: PropTypes.object
};

export default DashboardLayout;