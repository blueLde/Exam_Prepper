var express = require('express');
var secret = express.Router();

secret.get('/', function(req, res)
{
	res.sendfile('test_html/secret.html');
});

module.exports.secret = secret;