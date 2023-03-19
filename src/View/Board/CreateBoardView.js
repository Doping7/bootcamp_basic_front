import {
    AppBar,
    Box,
    Button,
    Container,
    Grid, Input,
    TextField, Toolbar,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {regBoard} from "../../modules/api";
import {useSelector} from "react-redux";
import MUIRichTextEditor from "mui-rte";

const CreateBoardView = () => {
    const navigate = useNavigate()
    const userData = useSelector(state => state.userHandler.userData);
    const [newBoard, setNewBoard] = useState({
        title:'',
        contents:'',
        file: null,
        user: userData
    })

    const handleChange = e => {
        setNewBoard({
            ...newBoard,
            [e.target.name]: e.target.value
        })
    }
    const goBack = () => {
        navigate('/board')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await regBoard(newBoard);
        if (result.status === 200) {
            navigate('/board')
        } else {
            alert('게시물 작성 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
        }
    }

    const save = data => {
        console.log(data);
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
                alignItems='center'
            >
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
                                    new Board
                                </Typography>
                            </Grid>
                            <Grid item xs>
                            </Grid>
                            <Box sx={{marginTop: 3}}>
                                <Button type='submit' variant={"contained"} size={'small'} onClick={handleSubmit} sx={{
                                    marginRight: 1,
                                    backgroundColor: '#000000',
                                    color: '#ffffff'
                                }}>Save</Button>
                                <Button variant={"outlined"} size={'small'} color={'inherit'}
                                        onClick={goBack}>Back</Button>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Container sx={{marginLeft: 4, py: 5}}>
                    <Box component='form'>
                        <Input sx={{display: 'flex', width: '90vw', marginBottom: 3}} name='title'
                               placeholder={'Title'} onChange={handleChange}/>
                        <TextField multiline rows={20} sx={{display: 'flex', width: '90vw'}} name='contents'
                                   placeholder={'Text Contents'} onChange={handleChange}/>
                        <TextField type='file' sx={{paddingTop: 5, display:'flex', width:'90vw'}} name='file'/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default CreateBoardView