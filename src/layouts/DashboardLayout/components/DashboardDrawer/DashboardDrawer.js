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
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ElevationScroll from "../../../../components/ElevationScroll";
import PropTypes from "prop-types";
import {Link, useHistory} from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import mainLogo from 'assets/images/logo-wh.png'
import {AccountCircle} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


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
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));



const DashboardDrawer = props => {
    const classes = useStyles();
    const {children, window} = props;
    const theme = useTheme();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openProfile = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const gotoProfile = () => {
        history.push("/dashboard/user")
    }

    const logout = () => {
        history.replace("/")
        localStorage.clear()
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const ElevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });


    return (
        <ElevationScroll trigger={ElevationTrigger}>
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
                    <Toolbar style={ElevationTrigger ? {backgroundColor: "#CF2424", color: "#FFFFFF"} : {backgroundColor: "inherit"}}>
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
                        <Typography variant="h5" noWrap className={classes.title}>
                            <b>KKCTBN 2020</b>
                        </Typography>

                        {auth && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openProfile}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={gotoProfile}>Profile</MenuItem>
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}

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
                        {open ?
                        <Link to={"/"}>
                            <img  src={mainLogo} alt={"KKCTBN LOGO"} />
                        </Link>
                             : null}
                        <IconButton onClick={handleDrawerClose} style={{color: "#FFFFFF"}}>
                            {open ? theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/> : null}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                            <ListItem  button key={'User'} component={Link} to={'/dashboard/user'}>
                                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                                <ListItemText primary={'User'}/>
                            </ListItem>
                            <ListItem button key={'Team'} component={Link} to={'/dashboard/team'}>
                                <ListItemIcon><PeopleIcon/></ListItemIcon>
                                <ListItemText primary={'Team'}/>
                            </ListItem>
                        <ListItem button key={'Manage News'} component={Link} to={'/dashboard/manage/news'}>
                            <ListItemIcon><AnnouncementIcon/></ListItemIcon>
                            <ListItemText primary={'Manage News'}/>
                        </ListItem>
                        <ListItem button key={'Manage Users'} component={Link} to={'/dashboard/manage/users'}>
                            <ListItemIcon><AssignmentIndIcon/></ListItemIcon>
                            <ListItemText primary={'Manage Users'}/>
                        </ListItem>
                        <ListItem button key={'Manage Teams'} component={Link} to={'/dashboard/manage/teams'}>
                            <ListItemIcon><GroupWorkIcon/></ListItemIcon>
                            <ListItemText primary={'Manage Teams'}/>
                        </ListItem>
                        <ListItem button key={'Manage Accounts'} component={Link} to={'/dashboard/manage/accounts'}>
                            <ListItemIcon><HowToRegIcon/></ListItemIcon>
                            <ListItemText primary={'Manage Accounts'}/>
                        </ListItem>
                        <ListItem button key={'Judger'} component={Link} to={'/dashboard/manage/judge'}>
                            <ListItemIcon><AssignmentIcon/></ListItemIcon>
                            <ListItemText primary={'Judger'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                            <ListItem button key={'Information'} component={Link} to={'/dashboard/information'}>
                                <ListItemIcon><NotificationsNoneIcon/></ListItemIcon>
                                <ListItemText primary={'Information'}/>
                            </ListItem>
                    </List>
                </Drawer>

                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {children}
                </main>
            </div>
        </ElevationScroll>
    );
}

DashboardDrawer.propTypes = {
    children: PropTypes.element,
};

export default DashboardDrawer
