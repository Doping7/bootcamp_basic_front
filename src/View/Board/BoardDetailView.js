import MainCard from "../util/Card/MainCard";
import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {getBoard} from "../../modules/api";
import {useParams} from "react-router-dom";

const BoardDetailView = ({}) => {
    const [board, setBoard] = useState();
    let { dataId } = useParams();

    useEffect( () => {
        const fetchBoard = async () => {
            const res = await getBoard(dataId);
            setBoard(res.data);
        }
        fetchBoard();

    },[dataId])


    return(
        <MainCard title={'check'}>
            <Typography variant="body2">
                {'check'}
            </Typography>
        </MainCard>
    )
}
export default BoardDetailView;