var express = require('express');
var register= express.Router();
var db = require('../db').db;
var user = {};

register.get('/', function(req, res)
{
	res.sendfile('test_html/register.html');
});

register.post('/', function(req, res)
{
	user.name = req.param('username');
	user.pw = req.param('password');
	user.sessions = [];
	
	db.user.find({name:user.name}, function(err, docs)
	{
		if(docs.length == 0)
		{
			db.user.insert(user);
			res.redirect('/');
		}
		else
		{
			res.redirect('/register');
		}
	});
});

module.exports.register = register;