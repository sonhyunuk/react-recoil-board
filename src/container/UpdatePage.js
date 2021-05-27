import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { boardListState } from '../recoil/states'

const UpdatePage = (props) => {
    const [values, setValues] = useState(props.location.item);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleUpdate = async () => {
        await axios.put(`http://localhost:3001/api/board`,
            {
                boardNo: `${values.no}`,
                boardTitle: `${values.title}`,
                boardContent: `${values.content}`

            }
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))

        props.history.push('/');
    }

    return (
        <>
            <div>
                <TextField type="text" label="제목" name="title" value={values.title} onChange={handleOnChange} />
            </div>
            <div>
                <TextField type="text" label="내용" name="content" value={values.content} onChange={handleOnChange} />
            </div>
            {<Button variant="contained" onClick={handleUpdate} >수정</Button>}
        </>
    )
}
export default UpdatePage;