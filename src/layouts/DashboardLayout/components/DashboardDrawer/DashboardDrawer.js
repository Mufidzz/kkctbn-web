import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ElevationScroll from "../../../../components/ElevationScroll";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1
    },
}));

const DashboardDrawer = props => {
    const classes = useStyles();
    const {children} = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getHeight = element => {
        if (element) { // need to check that we haven't already set the height or we'll create an infinite render loop
            // this.setState({ elementHeight: element.clientHeight });
            alert(element.clientHeight)
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                color={"transparent"}
                style={{boxShadow: "none"}}
            >
                <Toolbar>
                    <IconButton
                        color="white"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                        style={{
                            color: "#FFFFFF"
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        <b>KKCTBN 2020</b>
                    </Typography>
                </Toolbar>
            </AppBar>


            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar} style={{backgroundColor: "#D72C2C"}}>
                    <IconButton onClick={handleDrawerClose} style={{color: "#FFFFFF"}}>
                        {open ? theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/> : null}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <Link style={{textDecoration: 'none', color: '#454545'}} href={'/dashboard/user'}>
                        <ListItem button key={'User'}>
                            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                            <ListItemText primary={'User'}/>
                        </ListItem>
                    </Link>
                    <Link style={{textDecoration: 'none', color: '#454545'}} href={'/dashboard/team'}>
                        <ListItem button key={'Team'}>
                            <ListItemIcon><PeopleIcon/></ListItemIcon>
                            <ListItemText primary={'Team'}/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link style={{textDecoration: 'none', color: '#454545'}} href={'/dashboard/information'}>
                        <ListItem button key={'Information'}>
                            <ListItemIcon><NotificationsNoneIcon/></ListItemIcon>
                            <ListItemText primary={'Information'}/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}

DashboardDrawer.propTypes = {
    children: PropTypes.element,
};

export default DashboardDrawer
