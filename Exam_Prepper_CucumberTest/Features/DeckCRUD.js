module.exports = function()
{
    this.When(/^user enters title$/, function(callback)
    {
        this.enterDeckTitle(callback);
    });

    this.When(/^user enters description$/, function(callback)
    {
        this.enterDeckDescription(callback);
    });

    this.When(/^add some cards$/, function(callback)
    {
        this.addCardsToDeck(callback);
    });

    this.When(/^hit the button 'Save'$/, function(callback)
    {
        this.saveDeck(callback);
    });

    this.Then(/^the deck will be saved$/, function(callback)
    {
        this.checkIfDeckSaved(callback);
    });

    this.Then(/^synchronized with the server$/, function(callback)
    {
        this.synchronizeDeckWithServer(callback);
    });

    this.When(/^user enters the name of the deck$/, function(callback)
    {
        this.enterDeckSearchQuery(callback);
    });

    this.When(/^hit the button 'Search'$/, function(callback)
    {
        this.searchDeck(callback);
    });

    this.Then(/^all found decks will be shown$/, function(callback)
    {
        this.checkIfFoundDecksShown(callback);
    });

    this.Then(/^the user can click on one to read the deck$/, function(callback)
    {
        this.selectDeckFromSearchResults(callback);
    });

    this.Given(/^a selected deck$/, function(callback)
    {
        this.checkIfDeckIsSelected(callback);
    });

    this.When(/^the user hit the button 'Edit Deck'$/, function(callback)
    {
        this.clickEditDeck(callback);
    });

    this.Then(/^the deck will be openend$/, function(callback)
    {
        this.checkIfDeckOpened(callback);
    });

    this.Then(/^the user can update the deck$/, function(callback)
    {
        this.updateDeckInfos(callback);
    });

    this.When(/^user hit the button 'Remove Deck'$/, function(callback)
    {
        this.removeDeck(callback);
    });

    this.Then(/^the deck will be deleted$/, function(callback)
    {
        this.checkIfDeckIsDeleted(callback);
    });

    this.Then(/^the client tells the server to delete the deck$/, function(callback)
    {
        this.tellServerToDeleteDeck(callback);
    });

    this.Then(/^the server will delete the deck$/, function(callback)
    {
        this.checkIfServerDeletedDeck(callabck);
    });

}; 