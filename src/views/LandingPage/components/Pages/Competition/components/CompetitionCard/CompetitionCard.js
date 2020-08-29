import React, {useState} from 'react'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import PropTypes from 'prop-types'
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        textAlign: 'center',
    },
    cardContent: {
        padding: theme.spacing(2),
        backgroundColor: "#FF6C6C",
        color: "#FFF"
    }
}))

const CompetitionCard = props => {
    //Variable
    const {image, children, title, explain} = props;
    const classes = useStyles();

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card className={classes.card}>
                <CardActionArea onClick={handleClick}>
                    <CardContent>
                        <img width={"100%"} src={image} alt={"Card Image"}/>
                    </CardContent>
                    <CardContent className={classes.cardContent}>
                        {children}
                    </CardContent>
                </CardActionArea>
            </Card>


            <Card className={classes.card}>
                <CardActionArea onClick={handleClick}>
                    <CardContent>
                        {title}
                    </CardContent>
                    <CardContent className={classes.cardContent}>
                        {explain}
                    </CardContent>
                </CardActionArea>
            </Card>
        </ReactCardFlip>
    )
}

CompetitionCard.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
}

export default CompetitionCard;
