import React from 'react';
import { useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { boardListState } from '../recoil/states';
import { Link } from 'react-router-dom';


const BoardItem = (props) => {
    const item = props.item;
    const setBoardList = useSetRecoilState(boardListState);

    const handleDataDelete = async (no) => {
        console.log(no);
        await axios.delete(`http://localhost:3001/api/board/${no}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))

        getBoardList();
    }

    const getBoardList = () => {
        axios.get('http://localhost:3001/api/board')
            .then(res => setBoardList(res.data))
    }


    return (
        <TableRow>
            <TableCell>{item.no}</TableCell>
            <TableCell>
                <Link to ={{
                    pathname : `/board/read`,
                    item
                }}>
                  {item.title}  
                </Link>
            </TableCell>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.views}</TableCell>
            <TableCell>
                <Button variant="contained" color="primary">
                    <Link to={{
                        pathname: '/board/update',
                        item
                    }} >수정</Link>
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="contained" color="secondary"
                    onClick={(e) => {
                        handleDataDelete(item.no)
                    }}>삭제</Button>

            </TableCell>
        </TableRow>
    )

}

export default BoardItem;