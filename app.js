'use strict';

let express = require('express');
let app = express();
let routers = require('./routers/');
let mongoose = require('mongoose');  // module for db
let config = require('./config.js');  // reference to arquive config.js (has infos to db)

// Criando rota
app.use('/api', routers.api); 

// Caminho do db
let urlDatabase = `mongodb://${config.db.host}/${config.db.name}`;
//${config.db.host}/${config.db.name}`; // /${} para nao fazer concatenação, apenas no hecma6

//Connect to db
mongoose.connect(urlDatabase);

// Tratando err to conect
mongoose.connection.on('error', function(err) { // verificando a conexão, nao esta retornando nada mas pode retornar caso queira
    console.log('database connection error');
}); // adicionando o .on no objeto connection


mongoose.connection.once('open', function(err) { //verificando a conexão, nao esta retornando nada mas pode retornar caso queira
	app.listen(3000, ()=> console.log('> localhost:3000'));
}); // adicionando o .once no objeto connection



module.exports = app;

