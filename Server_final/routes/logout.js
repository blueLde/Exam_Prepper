var express = require('express');
var logout= express.Router();
var db = require('../db').db;
var user = {};

logout.get('/', function(req, res)
{		
	// returns null, if not found
	db.user.findOne({sessions: {$in: [req.sessionID]}}, function(err, doc)
	{
		// If doc not null and pw is the same
		if(doc)
		{
			db.user.update({_id:doc._id}, {$pull:{sessions:req.sessionID}}, {}, function()
			{
				req.session.regenerate(function(err){});
				// redirect after updating session
				res.redirect('/#LogoutWasOK');
			});
		}
		else
		{
			res.redirect('/#SessionNotFound');
		}
	});
});

module.exports.logout = logout;