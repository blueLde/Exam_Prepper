var express = require('express');
var login= express.Router();
var db = require('../db').db;
var user = {};

login.get('/', function(req, res)
{
	res.sendfile('test_html/login.html');
});

login.post('/', function(req, res)
{
	
	user.name = req.param('username');
	user.pw = req.param('password');
	
	// returns null, if not found
	db.user.findOne({name:user.name}, function(err, doc)
	{
		console.log(doc);
	});
	
	req.session.regenerate(function(err)
	{
		user.sid = req.sessionID;
	});
		
	res.redirect('/');
});

module.exports.login = login;