import React from "react";
import Particles from "react-particles-js";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    particle:{
        position:'absolute',
        left:0,
        top:0,
        width:'100%',
        height:'100%',
        zIndex: '0'
    },
}))

const Particle = () => {
    const classes = useStyles();
    return (
        <Particles
            canvasClassName={classes.particle}
            params={{
                "particles": {
                    "line_linked": {
                        "color": "#FFFFFF"
                    },
                    "number": {
                        "value": 200
                    },
                    "size": {
                        "value": 5
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
    );
}

export default Particle;