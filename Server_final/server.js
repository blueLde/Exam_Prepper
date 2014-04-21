/*
 * Exam Prepper Server with node JS and Express v4
 */

var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
	session = require('express-session'),
    app = express();

// Logger with 'short' output, see here: http://www.senchalabs.org/connect/logger.html
// :remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
app.use(morgan('short'));
// for parsing params
app.use(bodyParser());
// add cookies to req.cookies.NAME
app.use(cookieParser());
// add session-cookies
app.use(session({ secret: 'EXAMPREPPER-session cookie is signed with this secret to prevent tampering', key: 'sid'}));
// removes "powered-by express" in Response-Header
app.disable('x-powered-by');

// route definitions
app.get('/', function(req, res)
{
	res.sendfile('test_html/index.html');
});

app.use('/login', require('./routes/login.js').login);
app.use('/secret', require('./routes/secret.js').secret);
app.use('/register', require('./routes/register.js').register);

// If no route is found -> 404
app.get('*', function(req, res)
{
    res.send(404, 'Not found');
});
 
app.listen(8080);
console.log('Server is running...');
