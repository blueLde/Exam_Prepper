var express = require('express');
var secret = express.Router();
var db = require('../db').db;
var user = {};

secret.get('/', function(req, res)
{
	// returns null, if not found
	db.user.findOne({sessions: {$in: [req.sessionID]}}, function(err, doc)
	{
		// If doc not null and pw is the same
		if(doc)
		{
			res.sendfile('test_html/secret.html');
		}
		else
		{
			res.redirect('/login#PleaseLoginFirst');
		}
	});
	
});

module.exports.secret = secret;