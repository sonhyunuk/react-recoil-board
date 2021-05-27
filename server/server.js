const express = require('express');
const api = require('./routes/index');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());
app.use('/api', api);


app.listen(3001, () => console.log('listing'));