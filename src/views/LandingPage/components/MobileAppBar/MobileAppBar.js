import React, {Fragment} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link as Scroll} from 'react-scroll'
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ElevationScroll from "../../../../components/ElevationScroll";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import mainLogo from "assets/images/logo-color.png"
import {Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))


const MobileAppBar = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        right: false,
    });
    const {window} = props


    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Toolbar>
                <img src={mainLogo} alt={"KKCTBN Logo"}/>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem button>
                    <Scroll
                        activeClass={classes.activeItem}
                        className={classes.inactiveItem}
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <Typography
                            style={{cursor: "pointer", color: "#000000"}}
                            variant="body2"
                            color="primary">
                            Home
                        </Typography>
                    </Scroll>
                </ListItem>

                <ListItem button>
                    <Scroll
                        activeClass={classes.activeItem}
                        className={classes.inactiveItem}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        <Typography
                            style={{cursor: "pointer", color: "#000000"}}
                            variant="body2"
                            color="primary">
                            About
                        </Typography>
                    </Scroll>
                </ListItem>

                <ListItem button>
                    <Scroll
                        activeClass={classes.activeItem}
                        className={classes.inactiveItem}
                        to="competition"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        <Typography style={{cursor: "pointer", color: "#000000"}} variant="body2"
                                    color="primary">
                            Competition
                        </Typography>
                    </Scroll>
                </ListItem>

                <ListItem button>
                    <Scroll
                        activeClass={classes.activeItem}
                        className={classes.inactiveItem}
                        to="timeline"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        <Typography style={{cursor: "pointer", color: "#000000"}} variant="body2"
                                    color="primary">
                            Timeline
                        </Typography>
                    </Scroll>
                </ListItem>

                <ListItem button>
                    <Scroll
                        activeClass={classes.activeItem}
                        className={classes.inactiveItem}
                        to="faq"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        <Typography style={{cursor: "pointer", color: "#000000"}} variant="body2"
                                    color="primary">
                            FAQ
                        </Typography>
                    </Scroll>
                </ListItem>

                <Divider/>

                <ListItem component={Link} to={"/auth"}>
                    <Typography  style={{cursor: "pointer", color: "#000000"}}
                                variant="body2"
                                color="primary">
                        Login
                    </Typography>
                </ListItem>

            </List>

        </div>
    );

    const ElevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return (
        <Fragment>
            <ElevationScroll trigger={ElevationTrigger}>
                <AppBar color={"transparent"} style={ElevationTrigger ? {backgroundColor : "#A61D1D"} : null} >
                    <Toolbar class={classes.root}>
                        <IconButton aria-label="delete" size={"medium"} style={{color: "#FFFFFF"}}>
                            <MenuIcon onClick={toggleDrawer("left", true)} fontSize={"large"}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {['left', 'right', 'top'].map((anchor) => (
                <Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </Fragment>
            ))}
        </Fragment>
    );
}

export default MobileAppBar;