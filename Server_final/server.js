/*
 * Exam Prepper Server with node JS and Express v4
 */

var express = require('express'),
    morgan = require('morgan'),
    app = express();

// Logger with 'short' output, see here: http://www.senchalabs.org/connect/logger.html
// :remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
app.use(morgan('short'));
// removes "powered-by express" in Response-Header
app.disable('x-powered-by');

// falls NODE_ENV nicht gesetzt ist, dann wird per default von express auf development gesetzt
// development only
var env = process.env.NODE_ENV || 'development';
if ('development' == env) 
{
    console.warn('WARNING: Server runnning in development mode.');
}
else // production mode only
{
    console.log('Server running in production mode.');
}

// route definitions
app.get('/', function(req, res)
{
	res.send('Exam Prepper Server funktioniert :-)');
});

app.use('/login', require('./routes/login.js').login);

// If no route is found -> 404
app.get('*', function(req, res)
{
    res.send(404, 'Not found');
});
 
app.listen(8080);
