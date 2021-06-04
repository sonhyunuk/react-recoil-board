const pool = require('./db');

const boardList = async function () {
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows] = await connection.query('SELECT * FROM tb_board')
            connection.release();
            return rows;
        } catch (err) {
            console.log('Query Error');
            connection.release();
            return false;
        }
    } catch (err) {
        console.log('DB Error');
        return false;
    }
}

const boardDelete = async function (ctx) {
    let deleteNo = parseInt(ctx.params.deleteNo);
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows] = await connection.query("DELETE FROM tb_board WHERE `no` = ?", deleteNo);
            connection.release();
            return true;
        } catch (err) {
            console.log('Query Error');
            connection.release();
            return false;
        }
    } catch (err) {
        console.log('DB Error');
        return false;
    }
}

const createBoard = async function (ctx) {
    const { boardTitle, boardContent } = ctx.request.body;
    let reqData = [boardTitle, boardContent];
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, field] = await connection.query("INSERT INTO tb_board(`no`, title, content, id, views) VALUES (NULL, ?, ?, 'id001', 0)", reqData);
            return true;
        } catch (err) {
            console.log('Query Error');
            connection.release();
            return false;
        }
    } catch (err) {
        console.log('DB Error');
        return false;
    }
}

const updateBoard = async function (ctx) {
    const { boardTitle, boardContent, boardNo } = ctx.request.body;
    let reqData = [boardTitle, boardContent, boardNo];
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, field] = await connection.query("UPDATE tb_board SET title=?, content=? WHERE `no`= ?", reqData);
            return true;
        } catch (err) {
            console.log('Query Error');
            connection.release();
            return false;
        }
    } catch (err) {
        console.log('DB Error');
        return false;
    }
}

const countUpBoard = async function (ctx) {
    let reqData = [ctx.params.viewCount, ctx.params.boardNo];
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, field] = await connection.query("UPDATE tb_board SET views = ? + 1 WHERE  `no` = ?", reqData);
            return true;
        } catch (err) {
            connection.release();
            console.log('Query Error');
            return false;
        }
    } catch (err) {
        console.log('DB Error');
        return false;
    }
}

module.exports = { boardList, boardDelete, createBoard, updateBoard, countUpBoard }
