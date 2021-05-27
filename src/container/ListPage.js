import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { boardListState } from '../recoil/states';
import BoardItem from '../component/BoardItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const ListPage = () => {
    const [boardList, setBoardList] = useRecoilState(boardListState);


    useEffect(() => {
        setBoardListState();
    }, [])

    const setBoardListState = async () => {
        console.log(boardList);
        await axios.get('http://localhost:3001/api/board')
            .then(res => setBoardList(res.data))

    }


    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>작성자</TableCell>
                        <TableCell>조회수</TableCell>
                        <TableCell>수정</TableCell>
                        <TableCell>삭제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {boardList === '' ? (
                        <TableRow>
                            <TableCell rowSpan="3">loading</TableCell>)
                        </TableRow>
                    ) : (
                        boardList.map((data) => (
                            <BoardItem key={data.no} item={data} />
                        ))
                    )
                    }

                </TableBody>
                <TableFooter>

                </TableFooter>
            </Table>
            <Button variant="contained" >
                <Link to="/board/create">생성</Link>
            </Button>
        </>
    )

}
export default ListPage;