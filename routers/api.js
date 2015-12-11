'use strict';

let Router = require('express').Router; // construtor 
let router = new Router();
let controllers = require('../controllers/index.js');

router
	.route('/users')  // caminho na url (lembrando que existe um prefixo na app.js)
	.get(controllers.users.list) // listar todos os usuarios
	.post(controllers.users.create); // cadastrar os usuarios

router
	.route('/users/:id') // usuario unico
	.get(controllers.users.get) // pegar os dados (getSingle)
	.put(controllers.users.update) //  atualizar os dados (updateSingle)
	.delete(controllers.users.del); // deletar (deleteSingle)*/

module.exports = router;

