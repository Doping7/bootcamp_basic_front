import React from "react";
import {AppBar, Box, Button, Grid, Paper, Toolbar, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import QnARows from "../util/gridRows/QnARows";
import QnAColumn from "../util/gridColumns/QnAColumn";

const QnAView = ({qnaList}) => {

    return(
        <Paper sx={{maxWidth: 'auto', margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar sx={{height: 50}}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography sx={{my: 5}} fontWeight={'bold'} color="text.secondary" align="center">
                                QnA List
                            </Typography>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                        <Box sx={{marginTop: 3}}>
                            <Button  variant={"outlined"} size={'small'} color={'inherit'}>Write</Button>
                        </Box>
                    </Grid>
                </Toolbar>

                <Box sx={{height: 'calc(100vh - 200px)'}}>
                    <DataGrid
                        rows={QnARows(qnaList)}
                        columns={QnAColumn()}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </Box>
            </AppBar>
        </Paper>
    )
}
export default QnAView