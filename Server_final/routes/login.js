var express = require('express');
var login= express.Router();

login.get('/', function(req, res)
{
	res.send('moin');
});

module.exports.login = login;