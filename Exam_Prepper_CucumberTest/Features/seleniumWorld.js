var SeleniumWorld = function(callback)
{
    // Irgendwas machen, wenn die Welt läuft
    callback();
};

var webdriver = require('./../wd');

var browser = webdriver.remote('localhost', 4444);

browser.init({browserName:'firefox'}, function() {
  browser.get('http://rosesthen00b.github.io/Exam_Prepper/#/deck', function() {
       browser.elementById('buttonNew').click();
       browser.quit();
  });
});



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
    callback.fail();
};

SeleniumWorld.prototype.checkCookie = function(callback)
{
    callback.fail();  
};

SeleniumWorld.prototype.checkIfLoginSuccessful = function(loginSuccessful, callback)
{
    callback.fail();  
};

SeleniumWorld.prototype.checkIfLoginSuccessfulMessage = function(callback)
{
    callback.fail();  
};

SeleniumWorld.prototype,checkIfLoginFailedMessage = function(callback)
{
    callback.fail();  
};
/*
 * ENDE Login testen
 */

/*
 * Deck CRUD testen
 */
SeleniumWorld.prototype.enterDeckTitle = function(callback)
{
	/*browser.init({browserName:'firefox'}, function() {
	  browser.get('http://rosesthen00b.github.io/Exam_Prepper/#/deck', function() {
	       //browser.elementById('buttonNew').click();	       
	       browser.quit();
	       callback();  
	  });
	});*/ callback();
    
};

SeleniumWorld.prototype.enterDeckDescription = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.addCardsToDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.saveDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfDeckSaved = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.synchronizeDeckWithServer = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.enterDeckSearchQuery = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.searchDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfFoundDecksShown = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.selectDeckFromSearchResults = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfDeckIsSelected = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.clickEditDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfDeckOpened = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.updateDeckInfos = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.removeDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfDeckIsDeleted = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.tellServerToDeleteDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfServerDeletedDeck = function(callback)
{
    callback();  
};
/*
 * ENDE Deck CRUD testen
 */

/*
 * Create Review Card testen
 */
SeleniumWorld.prototype.checkIfCardTemplateExists = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.enterQuestionToCard = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.enterAnswerToCard = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.addCard = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfCardSaved = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.addCardToDeck = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.cancelCardCreation = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfCardDiscarded = function(callback)
{
    callback();  
};
/*
 * ENDE Create Review Card testen
 */

/*
 * Study CRUD testen
 */
SeleniumWorld.prototype.enterStudyTitle = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.addDeckToStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.saveStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfStudyIsSaved = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.synchronizeStudyWithServer = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.selectStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.clickEditStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfStudyIsOpened = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.readStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfStudyIsSelected = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.clickEditStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.updateStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.removeStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfStudyIsDeleted = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.tellServerToDeleteStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfServerDeletedStudy = function(callback)
{
    callback();  
};
/*
 * ENDE Study CRUD testen
 */

/*
 * Study Deck testen
 */
SeleniumWorld.prototype.checkIfDeckIsSelectedForStudy = function(callback)
{
	callback();	
};

SeleniumWorld.prototype.clickStudy = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfCardsAvaiable = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfCardIsShown = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.answerCard = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfCardsAvaiable = function(cardAvaiable, callback)
{
    callback();  
};

SeleniumWorld.prototype.checkIfProgressSaved = function(callback)
{
    callback();  
};

SeleniumWorld.prototype.synchronizeDeckWithServer = function(callback)
{
	callback();
};

exports.World = SeleniumWorld; 
