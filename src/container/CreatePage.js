import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const CreatePage = (props) => {

    const [values, setValues] = useState({ title: "", content: "" });

    const handleOnChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        console.log(values)
        setValues({ ...values, [name]: value })
    }

    const handleCreate = async () => {
        await axios.post(`http://localhost:3001/api/board`,
            {
                boardTitle: `${values.title}`,
                boardContent: `${values.content}`
            }
        ).then((res) => console.log(res))

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
            <Button variant="contained" onClick={handleCreate} >생성</Button>
        </>
    )
}
export default CreatePage;