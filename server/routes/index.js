const Router = require('@koa/router');
const router = new Router();
const pool = require('../lib/db');
const topic = require('../lib/topic');

router.get('/board', async (ctx) => {
    let result = await topic.boardList();
    ctx.body = result;
})

router.delete('/board/:deleteNo', async (ctx) => {
    let result = await topic.boardDelete(ctx);
    ctx.body = result;

});

router.post('/board', async (ctx) => {
    let result = await topic.createBoard(ctx);
    ctx.body = result;
});

router.put('/board', async (ctx) => {
    let result = await topic.updateBoard(ctx);
    ctx.body = result;
});

router.put('/board/:boardNo/:viewCount', async (ctx) => {
    let result = await topic.countUpBoard(ctx);
    console.log(result)
    ctx.body = result;
})

module.exports = router;