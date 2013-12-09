<<<<<<< Updated upstream
var SeleniumWorld = function(callback)
{
    // Irgendwas machen, wenn die Welt läuft
};

var webdriver = require('selenium-webdriver'), SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var server = new SeleniumServer('selenium-server.jar',
{
    port : 8080
});

server.start();

var driver = new webdriver.Builder().usingServer(server.address()).withCapabilities(webdriver.Capabilities.firefox()).build();

// Die Test-Funktionen

/*
 * Login testen
 */
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

SeleniumWorld.prototype.checkCookie = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfLoginSuccessful = function(loginSuccessful, callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfLoginSuccessfulMessage = function(callback)
{
    callback();  
};

SeleniumWorld.prototype,checkIfLoginFailedMessage = function(callback)
{
    callback();  
};
/*
 * ENDE Login testen
 */

/*
 * Deck CRUD testen
 */
Selenium.prototype.enterDeckTitle = function(callback)
{
    callback();  
};

Selenium.prototype.enterDeckDescription = function(callback)
{
    callback();  
};

Selenium.prototype.addCardsToDeck = function(callback)
{
    callback();  
};

Selenium.prototype.saveDeck = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfDeckSaved = function(callback)
{
    callback();  
};

Selenium.prototype.synchronizeDeckWithServer = function(callback)
{
    callback();  
};

Selenium.prototype.enterDeckSearchQuery = function(callback)
{
    callback();  
};

Selenium.prototype.searchDeck = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfFoundDecksShown = function(callback)
{
    callback();  
};

Selenium.prototype.selectDeckFromSearchResults = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfDeckIsSelected = function(callback)
{
    callback();  
};

Selenium.prototype.clickEditDeck = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfDeckOpened = function(callback)
{
    callback();  
};

Selenium.prototype.updateDeckInfos = function(callback)
{
    callback();  
};

Selenium.prototype.removeDeck = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfDeckIsDeleted = function(callback)
{
    callback();  
};

Selenium.prototype.tellServerToDeleteDeck = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfServerDeletedDeck = function(callback)
{
    callback();  
};
/*
 * ENDE Deck CRUD testen
 */

/*
 * Create Review Card testen
 */
Selenium.prototype.checkIfCardTemplateExists = function(callback)
{
    callback();  
};

Selenium.prototype.enterQuestionToCard = function(callback)
{
    callback();  
};

Selenium.prototype.enterAnswerToCard = function(callback)
{
    callback();  
};

Selenium.prototype.addCard = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfCardSaved = function(callback)
{
    callback();  
};

Selenium.prototype.addCardToDeck = function(callback)
{
    callback();  
};

Selenium.prototype.cancelCardCreation = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfCardDiscarded = function(callback)
{
    callback();  
};
/*
 * ENDE Create Review Card testen
 */

/*
 * Study CRUD testen
 */
Selenium.prototype.enterStudyTitle = function(callback)
{
    callback();  
};

Selenium.prototype.addDeckToStudy = function(callback)
{
    callback();  
};

Selenium.prototype.saveStudy = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfStudyIsSaved = function(callback)
{
    callback();  
};

Selenium.prototype.synchronizeStudyWithServer = function(callback)
{
    callback();  
};

Selenium.prototype.selectStudy = function(callback)
{
    callback();  
};

Selenium.prototype.clickEditStudy = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfStudyIsOpened = function(callback)
{
    callback();  
};

Selenium.prototype.readStudy = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfStudyIsSelected = function(callback)
{
    callback();  
};

Selenium.prototype.clickEditStudy = function(callback)
{
    callback();  
};

Selenium.prototype.updateStudy = function(callback)
{
    callback();  
};

Selenium.prototype.removeStudy = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfStudyIsDeleted = function(callback)
{
    callback();  
};

Selenium.prototype.tellServerToDeleteStudy = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfServerDeletedStudy = function(callback)
{
    callback();  
};
/*
 * ENDE Study CRUD testen
 */

/*
 * Study Deck testen
 */
Selenium.prototype.clickStudy = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfCardsAvaiable = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfCardIsShown = function(callback)
{
    callback();  
};

Selenium.prototype.answerCard = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfCardsAvaiable = function(callback)
{
    callback();  
};

Selenium.prototype.checkIfProgressSaved = function(callback)
{
    callback();  
};

Selenium.prototype.synchronizeDeckWithServer = function(callback)
{
    callback();  
};

driver.quit();

// Testen, ob Java danach auch tatsächlich beendet worden ist
server.stop();

exports.World = SeleniumWorld; 
=======
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
>>>>>>> Stashed changes
