import React, {useEffect, useState} from 'react'
import {AppBar, Avatar, Grid, IconButton, Tab, Tabs, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import {useNavigate} from "react-router-dom";
import {Logout} from "@mui/icons-material";


const Menu = ({menuList, logout}) => {
    const navigate = useNavigate();
    const [currentMenu, setCurrentMenu] = useState('0');

    useEffect(() => {
        const nowPath = window.location.pathname;
        switch (nowPath) {
            case '/notice':
                setCurrentMenu('0')
                break;
            case '/board':
                setCurrentMenu('1')
                break;
            case '/faq':
                setCurrentMenu('2')
                break;
            case '/qna':
                setCurrentMenu('3')
                break;
            default:
                setCurrentMenu('0');
                break;
        }
    }, [])
    const menuClick = menu => {
        navigate(menu.url);
        setCurrentMenu(menu.menuId);
    }

    const onDrawerToggle = () => {

    }
    return (
        <React.Fragment>
            <AppBar sx={{backgroundColor: '#333333'}} position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{display: {sm: 'none', xs: 'block'}}} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item xs sx={{fontSize: 30}}>Forum</Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{p: 0.5}}>
                                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar"/>
                            </IconButton>
                            <IconButton color="inherit" sx={{p: 0.5}} onClick={logout}>
                                <Logout/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                sx={{backgroundColor: '#333333'}}
                position="static"
                elevation={0}
            >
            </AppBar>
            <AppBar sx={{backgroundColor: '#333333'}} component="div" position="static" elevation={0}>
                <Tabs value={currentMenu} textColor="inherit" TabIndicatorProps={{style: {backgroundColor: '#ffffff'}}}
                      sx={{backgroundColor: '#333333'}}>
                    {menuList.map(menu => (
                        <Tab key={"tabKey" + menu.menuId} label={menu.name} value={menu.menuId} onClick={() => {
                            menuClick(menu)
                        }}/>
                    ))}
                </Tabs>
            </AppBar>
        </React.Fragment>
    )
}
export default Menu