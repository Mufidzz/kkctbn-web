import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {OverlapTypography} from "../../../../../components";
import {ArrowForwardIos} from "@material-ui/icons";
import faqShip from "assets/images/faq-ship.png"
import {useMediaQuery} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    header: {
        marginTop: 50,
        marginLeft: 90,
        marginBottom: 20
    },
    heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
  	},
    overlayText: {
        color: "rgba(255, 0, 0,.1)",
        userSelect: "none",
        fontWeight: 600
    },
    mainText: {
        color: "#CF2424"
    },
}))

const faqQuestion = [
    "Apakah peserta dapat mengikuti lebih dari satu kategori lomba ?",
    "Berapa Jumlah anggota maksimal setiap kategori lomba ?",
    "Kapan batas akhir pendaftaran tim dan lomba ?",
    "Mengapa tim saya belum di verifikasi ?"
]

const faqAnswer = [
    "Peserta KKCTBN 2020 dapat mengikuti lebih dari satu kategori lomba",
    "Panduan dan aturan mengenai jumlah peserta dapat dilihat di panduan teknis",
    "Berdasarkan panduan, batas akhir pendaftaran tim adalah 20 Oktober 2020",
    "Mohon untuk menunggu 2x24 jam untuk verifikasi tim ya :)"
]

const FAQ = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
		const [expanded, setExpanded] = React.useState(false);
		
		const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  	};
		
    return (
        <Fragment>
            <Grid container justify={"center"} className={classes.root}>
                <Grid item container md={10} sm={11} xs={11} justify={"flex-start"}>
                    <Grid item container md={6}>
                        <Grid item md={12}>
                            <OverlapTypography overlay={<Typography className={classes.overlayText}
                                                                    variant={"h3"}>Frequently <br/>Asked <br/> Question</Typography>}>
                                <Typography className={classes.mainText} variant={"h2"}><b>FAQ</b></Typography>
                            </OverlapTypography>
                        </Grid>
                        <Grid item container md={12} sm={12} xs={12} spacing={2}>
                            {faqQuestion.map((v,i) => {
                                return (
                                    <Grid item container md={12} sm={12} xs={12} alignItems={"center"}>
                                        <Accordion expanded={expanded === i} onChange={handleChange(i)}>
																					<AccordionSummary
																						expandIcon={<ExpandMoreIcon />}
																						aria-controls="panel1bh-content"
																						id="panel1bh-header"
																					>
																						<Typography variant="h6" className={classes.heading}>
                                                <b>{v}</b>
                                            </Typography>
																					</AccordionSummary>
																					<AccordionDetails>
																						<Typography>
																							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
																							maximus est, id dignissim quam.
																						</Typography>
																					</AccordionDetails>
																				</Accordion>		
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>

                    <img src={faqShip} className={classes.img} width={isMobile ? "75%" : 'auto'} alt={"FAQ Ship"} style={{position: 'absolute', right: 0, zIndex:-1}}/>

                </Grid>
            </Grid>
        </Fragment>
    )
}

export default FAQ;
