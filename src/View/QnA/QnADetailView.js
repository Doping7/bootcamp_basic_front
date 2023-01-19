import {
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getApiQna} from "../../modules/QnAReducer";

const QnADetailView = () => {
    //const userData = JSON.parse(localStorage.getItem('userData'));
    const qna = useSelector(state => state.qnaHandler.qna);
    const dispatch = useDispatch();
    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getApiQna(param.dataId))
    }, [param, dispatch])

    useEffect(() => {
        console.log(qna);
    }, [qna])

    const goBack = () => {
        navigate('/qna')
    }


    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 5
                }}
            >
                <Container>
                    <Card>
                        <CardHeader
                            title={qna.question}
                            sx={{backgroundColor: '#333333', color: '#ffffff'}}
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={6}
                                wrap="wrap"
                            >
                                <Grid
                                    item
                                    md={4}
                                    sm={6}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        minHeight: '50vh'
                                    }}
                                    xs={12}
                                >
                                        <Typography>
                                            {qna.answer}
                                        </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider/>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 2
                            }}
                        >

                            <div>
                                <Button
                                    color="inherit"
                                    size='small'
                                    variant="outlined"
                                    sx={{marginRight: 3}}
                                >
                                    Edit
                                </Button>
                                <Button
                                    color="inherit"
                                    size='small'
                                    variant="outlined"
                                    onClick={goBack}
                                >
                                    Back
                                </Button>

                            </div>

                        </Box>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
export default QnADetailView;