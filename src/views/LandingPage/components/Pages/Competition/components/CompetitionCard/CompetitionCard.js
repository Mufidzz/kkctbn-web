import React from 'react'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import PropTypes from 'prop-types'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        textAlign: 'center',
    },
    cardContent: {
        padding: theme.spacing(2),
        backgroundColor: "#FF6C6C",

    }
}))

const CompetitionCard = props => {
    //Variable
    const {image, children} = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <img width={"100%"} src={image} alt={"Card Image"}/>
                </CardContent>
                <CardContent className={classes.cardContent}>
                    {children}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

CompetitionCard.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
}

export default CompetitionCard;