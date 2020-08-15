import React from 'react'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";
import CompetitionCard from "../../../Competition/components/CompetitionCard";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        textAlign: 'center',
    },
    cardTitle: {
        padding: theme.spacing(2),
        backgroundColor: "#FF6C6C",
    },
    cardContent: {
        padding: theme.spacing(2),
    }
}))

const NewsCard = props => {
    const {image, title, children} = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent style={{padding : 0}}>
                    <img width={"100%"} src={image} alt={"Card Image"}/>
                </CardContent>
                <CardContent className={classes.cardTitle}>
                    {title}
                </CardContent>

                <CardContent className={classes.cardContent}>
                    {children}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

NewsCard.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
export default NewsCard;