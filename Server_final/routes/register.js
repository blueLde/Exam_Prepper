var express = require('express');
var register= express.Router();
var db = require('../db');
var user = {};

register.get('/', function(req, res)
{
	res.sendfile('test_html/register.html');
});

register.post('/', function(req, res)
{
	console.log('Username: ' + req.param('username'));
	console.log('Password: ' + req.param('password'));
	res.redirect('/');
});

module.exports.register = register;