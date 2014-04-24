var express = require('express');
var login= express.Router();
var db = require('../db').db;
var user = {};

login.get('/', function(req, res)
{
	// returns null, if not found
	db.user.findOne({sessions: {$in: [req.sessionID]}}, function(err, doc)
	{
		// If doc not null and pw is the same
		if(doc)
		{
			res.redirect('/#AlreadyLoggedIn');
		}
		else
		{
			res.sendfile('test_html/login.html');
		}
	});
	
});

login.post('/', function(req, res)
{
	
	user.name = req.param('username');
	user.pw = req.param('password');
	
	// returns null, if not found
	db.user.findOne({name:user.name}, function(err, doc)
	{
		// If doc not null and pw is the same
		if(doc && doc.pw == user.pw)
		{
			req.session.regenerate(function(err)
			{
				user.sid = req.sessionID;
				
				user.id = doc._id;
				
				db.user.update({_id:user.id}, {$push:{sessions:user.sid}}, {}, function()
				{
					// redirect after updating session
					res.redirect('/#LoginWasOK');
				});
			});
			
		}
		else
		{
			res.redirect('/login#WrongUserOrPassword');
		}
	});
});

module.exports.login = login;