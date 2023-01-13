import {connect} from "react-redux";
import {getApiMenuList} from "../modules/MenuReducer";
import {useEffect, useState} from "react";
import Menu from "../View/Menu/Menu";

const MenuContainer = ({menuList, getApiMenuList}) => {

    const [currentMenu, setCurrentMenu] = useState('');

    useEffect(() => {
        getApiMenuList()
    }, [getApiMenuList])

    return (
        <>
            <Menu menuList={menuList} setCurrentMenu={setCurrentMenu}/>
        </>
    )
}

export default connect(
    ({menuHandler}) => ({
        menuList: menuHandler.menuList
    }),
    {
    getApiMenuList,
    }
)(MenuContainer)