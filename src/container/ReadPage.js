import axios from 'axios';
import React, { useEffect } from 'react';

const ReadPage = ({location :{item}}) => {

    useEffect(()=>{
        axios.put(`http://localhost:3001/api/board/${item.no}/${item.views}`,
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <p>제목 :{item.title}</p>
            <p>내용 :{item.content}</p>
        </div>
    )

}
export default ReadPage;