var express = require('express');
var login= express.Router();

login.get('/', function(req, res)
{
	res.sendfile('test_html/login.html');
});

login.post('/', function(req, res)
{
	console.log('Username: ' + req.param('username'));
	console.log('Password: ' + req.param('password'));
	res.redirect('/');
});

module.exports.login = login;