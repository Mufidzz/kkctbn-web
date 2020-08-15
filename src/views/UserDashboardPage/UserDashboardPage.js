import React from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const UserDashboardPage = props => {
    return (
        <Grid container >
            <Card style={{width :"100%"}}>
                <CardContent>
                    {[1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1].map((v,i) => {
                        return(
                            <Typography variant={"h1"} align={"center"}> ABCDEFGHIJKLMN </Typography>
                        )
                    })}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default UserDashboardPage;