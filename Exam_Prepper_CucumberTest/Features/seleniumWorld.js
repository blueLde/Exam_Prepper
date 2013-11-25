var SeleniumWorld = function(callback)
{
    // Irgendwas machen, wenn die Welt läuft
};

var webdriver = require('selenium-webdriver'),
    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var server = new SeleniumServer('selenium-server.jar', {
  port: 8080
});

server.start();

var driver = new webdriver.Builder().
    usingServer(server.address()).
    withCapabilities(webdriver.Capabilities.firefox()).
    build();

// Die Test-Funktionen
SeleniumWorld.prototype.enterUsername = function(callback)
{
    callback();
};

SeleniumWorld.prototype.enterPW = function(callback)
{
    callback();
};

SeleniumWorld.prototype.clickLoginButton = function(callback)
{
    callback();
};

SeleniumWorld.prototype.checkUserData = function(callback)
{
    callback();
};

driver.quit();

// Testen, ob Java danach auch tatsächlich beendet worden ist
server.stop();

exports.World = SeleniumWorld;