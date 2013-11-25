var express = require('express');
var path = require('path');
var request = require('request');

var googleapis = require('googleapis');
var OAuth2Client = googleapis.OAuth2Client;
var oauth2Client;

var client_id = '483472766939-j5i8ontv8saupdt8vqrf99uvnbo1v3f1.apps.googleusercontent.com';
var client_secret = 'HNvBG4cgoYsE8KpKQgFnzMgT';
var redirect_url = 'http://127.0.0.1:8080/oauth_google_code';


var app = express();
var port = 8080;

//app.use(express.static(path.resolve(html_dir)));

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/', function(req, res)
{
    res.send('Exam Prepper Server is working!');
});

app.get('/login', function(req, res)
{
    res.redirect('/oauth_google');
});

app.get('/oauth_google', function(req, res)
{
    // Neuen Client erstellen
    oauth2Client = new OAuth2Client(client_id, client_secret, redirect_url);
    
    // URL für OAuth erstllen
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'openid email'
    });
    
    // OAuth-URL aufrufen
    console.log(url);
    res.redirect(url);
});


app.get('/oauth_google_code', function(req, res)
{

    // Token anfordern
    /*
     * Hinweis: Refresh-Token wird nur bei der Allersten Anmeldung mitgeschickt
     *          Bei jeder weiteren Benutzung der Website fehlt der Refresh-Token bei der Antwort
     *          Um neuen Refresh-Token zu erhalten, muss der Benutzer zunächst bei Google
     *          die Berechtigungen für meine App entziehen und sich anschließend neu
     *          einloggen & Berechtigungen vergeben.
     */
    request.post(
        'https://accounts.google.com/o/oauth2/token',
        { form:{
            // POST-Parameter
            code: req.query.code,
            client_id: oauth2Client.clientId_,
            client_secret: oauth2Client.clientSecret_,
            redirect_uri: oauth2Client.redirectUri_,
            grant_type: 'authorization_code'
        } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) 
            {
                console.log(body);
                oauth2Client.credentials = JSON.parse(body);
                
                request('https://www.googleapis.com/oauth2/v1/tokeninfo?id_token=' + oauth2Client.credentials.id_token, function (error, response, body) {
                if (!error && response.statusCode == 200) 
                    {
                        console.log(body);
                    }
                });
                
            }
        }
    );
    
    // TODO: zurück zum Exam Prepper leiten
    res.send('redirecting...');  
});

// TODO: anpassen!
app.put('/deck', function(req, res)
{
    res.send('not implemented yet.');
});

// 404
app.get('*', function(req, resp)
{
    resp.send(404, "<h1>404. Is nix gut. Hau ab.</h1>");
});

app.listen(port);
console.log('Express is running...');
