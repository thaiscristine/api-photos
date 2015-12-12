'use strict';

var app = require('../../app.js'); // pasta que quer aplicar o teste
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things')); // usando chai como variavel
var expect = chai.expect;

describe('Photos controller', function(){
	describe('.list - GET /photos', function(){
		it('should return a json array', function(done){ // done como argumento do it
			 request(app)
				.get('/api/photos') // caminho setado no app
				.end(function(err, res){
					console.log(res.body);

					expect(res.statusCode).to.be.equal(200);//expect(res.Code.be.an('array'));
					expect('').to.be.an('array');
					expect(res.body).all.have.property('name'); // verifica se existe a chave 'name'
						//.to.be.an('string');
					done(); // chamar a funcao done
				}); // end retorno do request
		});
	});

	describe('.create - POST /photos', function(){
		it('should send a json object', function(done){
			request(app)
				.post('/api/photos') // 
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(201); // http criado
					expect(res.body).to.be.an('object');
					expect(res.body)
						.all.have.property('message');
					done();
				});
		});
	});

});