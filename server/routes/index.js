const Router = require('@koa/router');
const router = new Router();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'board',
    connectionLimit: 10
});

router.get('/board', async (ctx) => {
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows] = await connection.query('SELECT * FROM tb_board');
            connection.release();
            ctx.body = rows;
        } catch (err) {
            console.log('Query Error');
            connection.release();
        }
    } catch (err) {
        console.log('DB Error');
    }
})

router.delete('/board/:deleteNo', async (ctx) => {
    let deleteNo = parseInt(ctx.params.deleteNo);
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows] = await connection.query("DELETE FROM tb_board WHERE `no` = ?", deleteNo);
            connection.release();
            ctx.body = rows;
        } catch (err) {
            console.log('Query Error');
            connection.release();
        }
    } catch (err) {
        console.log('DB Error');
    }
});

router.post('/board', async (ctx) => {
    let reqData = [ctx.request.body.boardTitle, ctx.request.body.boardContent];
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, field] = await connection.query("INSERT INTO tb_board(`no`, title, content, id, views) VALUES (NULL, ?, ?, 'id001', 0)", reqData);
            ctx.body = "Success"
        } catch (err) {
            console.log('Query Error');
            connection.release();
        }
    } catch (err) {
        console.log('DB Error');
    }
});

router.put('/board', async (ctx) => {
    let reqData = [ctx.request.body.boardTitle, ctx.request.body.boardContent, ctx.request.body.boardNo];
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, field] = await connection.query("UPDATE tb_board SET title=?, content=? WHERE `no`= ?", reqData);
            ctx.body = "Success"
        } catch (err) {
            console.log('Query Error');
            connection.release();
        }
    } catch (err) {
        console.log('DB Error');
    }
});

router.put('/board/:boardNo/:viewCount', async (ctx) => {
    let reqData = [ctx.params.viewCount, ctx.params.boardNo];

    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, field] = await connection.query("UPDATE tb_board SET views = ? + 1 WHERE  `no` = ?", reqData);
            ctx.body = "Success";
        } catch (err) {
            connection.release();
            console.log('Query Error')
        }
    } catch (err) {
        console.log('DB Error')
    }
})

module.exports = router;