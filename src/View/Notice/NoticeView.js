import React from "react";
import {AppBar, Box, Button, Grid, IconButton, Paper, TextField, Toolbar, Tooltip, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import NoticeColumn from "../util/gridColumns/NoticeColumn";
import NoticeRows from "../util/gridRows/NoticeRows";

const NoticeView = ({noticeList}) => {

    return (
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
                                Notice List
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
                        rows={NoticeRows(noticeList)}
                        columns={NoticeColumn()}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </Box>
            </AppBar>
        </Paper>
    )
}
export default NoticeView