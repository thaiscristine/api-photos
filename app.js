'use strict';

let express = require('express');
let app = express();
let routers = require('./routers/');
let mongoose = require('mongoose');


//app.get('/'function(req, res){ });
app.use('/api', routers.api); 

//router.api

app.listen(3000, ()=> console.log('> localhost:3000'));

module.exports = app;

