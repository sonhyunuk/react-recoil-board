const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'board'
});

conn.connect();

router.get('/board', (req, res) => {
    conn.query('SELECT * FROM tb_board', (err, result, fields) => {
        if (err)
            console.log(err);

        res.json(result);
    })
});

router.delete('/board/:deleteNo', (req, res) => {
    let deleteNo = parseInt(req.params.deleteNo);
    conn.query("DELETE FROM tb_board WHERE `no` = ?", deleteNo, (err, result, fields) => {
        if (err)
            console.log(err);
        res.json(result);

    })
});

router.post('/board', (req, res) => {
    let reqData = [req.body.boardTitle, req.body.boardContent];
    conn.query("INSERT INTO tb_board(`no`, title, content, id, views) VALUES (NULL, ?, ?, 'id001', 0)", reqData, (err, result, fields) => {
        if (err)
            console.log(error);
        res.json(result);
    })
});

router.put('/board', (req, res) => {
    let reqData = [req.body.boardTitle, req.body.boardContent, req.body.boardNo,];
    conn.query("UPDATE tb_board SET title=?, content=? WHERE `no`= ?", reqData, (err, result, field) => {
        if (err)
            console.log(err);
        res.json(result);
    })
});

router.put('/board/:boardNo/:viewCount', (req, res) => {
    let reqData = [req.params.viewCount, req.params.boardNo];
    conn.query("UPDATE tb_board SET views = ? + 1 WHERE  `no` = ?", reqData, (err, result, field) => {
        if (err)
            console.log(err)

        res.json(result);
    })
})

module.exports = router;