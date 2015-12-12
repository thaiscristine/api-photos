'use strict';

let Router = require('express').Router; // construtor 
let router = new Router();
let controllers = require('../controllers/index.js');

router
	.route('/photos')  // caminho na url (lembrando que existe um prefixo na app.js)
	.get(controllers.photos.list) // listar todos os usuarios
	.post(controllers.photos.create); // cadastrar os usuarios

router
	.route('/photos/:id') // usuario unico
	.get(controllers.photos.get) // pegar os dados (getSingle)
	.put(controllers.photos.update) //  atualizar os dados (updateSingle)
	.delete(controllers.photos.del); // deletar (deleteSingle)*/

module.exports = router;

