import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import login from "./login";
import register from "./register";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

 
const useStyles = makeStyles((theme) => ({
  root : {
        background: "linear-gradient(rgba(62, 84, 197, 1), rgba(195, 35, 35, 1))",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        //color: "#fff",
        //fontsize: 12,
        //fontFamily: "montserrat"
    },
  cards: {
  	borderRadius: '5%',
		marginTop: '5%',  
		marginBottom: '5%',  
  	marginLeft: '33%',
  	display: 'inline-block',
    minWidth: 275,
  },
  cards2: {
		margin: 'auto',  
  	display: 'inline-block',
  	alignItems:"center",
  	justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 14,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white',
  },
  avatar: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems:"center",
  },
  form: {
		borderRadius: '5%',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
    return (
    <Box className={classes.root}>
                </Box>
    )
}

export default LoginPage;

