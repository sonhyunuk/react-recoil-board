const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const api = require('./routes/index');
const json = require('koa-json');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());
app.use(json());
router.use('/api',api.routes());

app.use(router.routes());

app.listen(3001, () => console.log('listing'));