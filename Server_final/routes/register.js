var express = require('express');
var register= express.Router();
var db = require('../db').db;
var user = {};

register.get('/', function(req, res)
{
	// returns null, if not found
	db.user.findOne({sessions: {$in: [req.sessionID]}}, function(err, doc)
	{
		// If doc not null and pw is the same
		if(doc)
		{
			res.redirect('/#AlreadyLoggedIn_LogoutBeforeRegister');
		}
		else
		{
			res.sendfile('test_html/register.html');
		}
	});
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
			res.redirect('/#RegisterWasOK');
		}
		else
		{
			res.redirect('/register#UserExistsAlready');
		}
	});
});

module.exports.register = register;