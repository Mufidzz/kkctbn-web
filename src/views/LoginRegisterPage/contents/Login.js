import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import logokkctbn from '../../../assets/images/logo-wh-bg.png';


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  form: {
  	marginTop: '10%',
		borderRadius: '5%',
    width: '80%', // Fix IE 11 issue.
  },
  cards : {
  	borderRadius: '5%',  
		color: 'white',
  	display: 'inline-block',
    width: '40%',
    position: 'fixed',
    height: '90%',
    right: 0,
    bottom: 0,
    background: "linear-gradient(rgba(255, 150, 150, 1), rgba(255, 23, 172, 0.58))",
  },
  avatar: {
  	marginTop: '15%',
    marginLeft: '15%',
    justifyContent: 'center',
    alignItems:"center",
    width: '80%',
  },
  submit: {
  background: "linear-gradient(rgba(255, 150, 150, 1), rgba(255, 23, 172, 0.58))",
  color: 'white',
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  },
  
  gridParent: {
  	width: '100%',
  	height: '100%',
  },
  
  btnRegistrasi: {
  marginTop: '10%',
  color: 'white',
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  },
  
  gridLeft: {
    marginLeft: '10%',
  },
  
  greetings: {
  	color: 'white',
  	margin: '5%',
  	justifyContent: 'center',
  	    fontSize: '40pt',
  },
  gridGreeting: {
  	width: 'auto',
  	margin: '20%',
  	padding: '10%',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  h1: {
    color: 'rgba(255,142,154,0.2)',
    marginTop: '10%',
    fontSize: '50pt',
  },
  h1_greet: {
    textColor: 'white',
    fontSize: '20pt',
    textAlign: 'center',
  },
  h2_greet: {
  	textAlign: 'center',
  	textColor: 'white',
    fontSize: '20pt',
  },
  
  h3_greet: {
  	marginTop: '20pt',
  	textAlign: 'center',
  	textColor: 'white',
    fontSize: '12pt',
  },
  h2: {
    color: 'rgba(255,142,154,1)',
    position: 'absolute',
    bottom: 400,
    left: 150,
    fontSize: '50pt',
  },
}));

const Login = props => {
		const [name, setName] = useState("");
    const classes = useStyles();
        return (
        
        <Grid container 
        		spacing={3}
						direction="row"
						justify="space-between"
						alignItems="stretch"
						className={classes.gridParent}>
        
		      <Grid container item xs className={classes.gridLeft}>
		        
        		<form className={classes.form} noValidate>
        			<h1 className={classes.h1} >SIGN IN, <br />Gladitor</h1>
		        <h2 className={classes.h2} >SIGN IN</h2>
				      <TextField
				        variant="outlined"
				        margin="normal"
				        required
				        fullWidth
				        id="email"
				        label="Email Address"
				        name="email"
				        autoComplete="email"
				        autoFocus
				        style={{
									backgroundColor: "rgba(220, 220, 220, 1)",
									borderRadius: 25,
								}}
				      />
				      
				      <TextField
				        variant="outlined"
				        margin="normal"
				        required
				        fullWidth
				        name="password"
				        label="Password"
				        type="password"
				        id="password"
				        onChange={e => setName(e.target.value)}
				        style={{
									backgroundColor: "rgba(220, 220, 220, 1)",
									borderRadius: 25,
								}}
				      />
          
          
				      <Button
				        type="submit"
				        width="50%"
				        variant="contained"		    
				        className={classes.submit}>
				        	Login
				      </Button>
        		</form>
        	</Grid>
        
        <Grid container item xs className={classes.gridRight} alignItems="stretch">
          <Card className={classes.cards}>
          	<Grid
							container
							direction="column"
							justify="flex-start"
							alignItems="center"
						>
						
						
						<Grid item xs={12}>
							<img src={logokkctbn} className={classes.avatar}/>				      
				   	</Grid>
				   	
				   	<Grid item xs={12} className={classes.h1_greet}>
				   		<h1>Welcome Back, <br />Gladiator</h1>
				   	</Grid>
				   	
				   	<Grid item xs={12} className={classes.h2_greet}>
				   		<h5>To access your dashboard please<br/> login with your account</h5>
				   	</Grid>
							
						<Grid item xs={12} className={classes.h3_greet}>
				   			<h5> Belum Punya Akun ?, Daftar Yuk!</h5>
				   	</Grid>
							
						<Grid item xs={12}>
							<Link to="/register" variant="body2">
				          <Button variant="outlined" className={classes.btnRegistrasi}>Register</Button>		   		
				       </Link>   
				   	</Grid>


							
						</Grid>
          

						
    </Card>
        </Grid>
        
      </Grid>
      
        
      
            )
        }
    
    
export default Login
