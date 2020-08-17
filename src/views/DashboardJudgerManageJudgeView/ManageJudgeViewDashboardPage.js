import React from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import theme from "../../theme";
import {Link} from 'react-router-dom';
import {Scrollable} from "../../components";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    label: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    containedTeal: {
        color: '#FFF',
        backgroundColor: '#009688',
        "&:hover": {
            backgroundColor: '#00796b',
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: '#009688'
            }
        }
    }

}));

const ManageJudgeViewDashboardPage = props => {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [checked, setChecked] = React.useState(true);

    return (

        <Grid container style={{width: '100%'}}>
            <Scrollable>
                <Card style={{width: '100%'}}>
                    <CardHeader
                        title={'Submission'}
                        style={{backgroundColor: '#f50057', color: '#FFF'}}
                    />
                    <CardContent>

                        <Grid container spacing={2}>
                            <Grid item md={12} xs={12}>
                                <Typography variant={"body2"} className={classes.label}>Title of Innovation</Typography>
                                <Typography variant={"h6"}>Desain Kapal Anti Tsunami</Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography variant={"body2"} className={classes.label}>URL Link of
                                    Innovation</Typography>
                                <Typography variant={"h6"}>https://www.youtube.com/</Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography variant={'body2'} style={{marginTop: 10}}>Submission File</Typography>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Button variant={"contained"} className={classes.containedTeal} fullWidth>
                                    Download
                                </Button>
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop: theme.spacing(3)}}>
                                <hr/>
                            </Grid>
                            <Grid item md={10}/>
                            <Grid item md={2} xs={12}>
                                <Link to={'/dashboard/manage/judge/'} style={{textDecoration: 'none'}}>
                                    <Button fullWidth variant={'contained'} color={'primary'}>
                                        Back
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Scrollable>
        </Grid>
    )
}

export default ManageJudgeViewDashboardPage;