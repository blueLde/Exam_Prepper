module.exports = function()
{
    this.Given(/^a deck$/, function(callback)
    {
        this.checkIfDeckIsSelectedForStudy(callback);
    });

    this.When(/^user hit the button 'study'$/, function(callback)
    {
        this.clickStudy(callback);
    });

    this.When(/^there are cards avaiable$/, function(callback)
    {
        this.checkIfCardsAvaiable(true, callback);
    });

    this.Then(/^a card will be shown$/, function(callback)
    {
        this.checkIfCardIsShown(callback);
    });

    this.Then(/^the user answers it$/, function(callback)
    {
        this.answerCard(callback);
    });

    this.When(/^there are no cards avaiable$/, function(callback)
    {
        this.checkIfCardsAvaiable(false, callback);
    });

    this.Then(/^the progress will be saved$/, function(callback)
    {
        this.checkIfProgressSaved(callback);
    });

    this.Then(/^the deck will be synchronized$/, function(callback)
    {
        this.synchronizeDeckWithServer(callback);
    });
}; 

