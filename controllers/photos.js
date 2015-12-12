'use strict';

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	del: del
};


/* fora do escopo não pode ser visto externamente */

function list(req, res){
	var users = [
		{ name : 'Thais'},
		{ name : 'Vitor'}
	];
	res.status(200).json(users);

}; // ok to list /users

function create(req, res){
	res
		.status(201)
		.json({
			message: 'created'
		});
}; 

function get(req,res){
	res.json('teste get');
	console.log('localizado');
}; // ok to unique user /users/sadas

function update(req, res){
	res.json('teste update');
	console.log('atualizado');
}; // ok to unique user /users/sadas

function del(req, res){
	var user = { name: ''};
	res.json({
		message: 'deleted'
	});
	console.log('deletado');
}; // ok to unique user /users/sadas