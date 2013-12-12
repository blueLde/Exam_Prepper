module.exports = function()
{
    this.Given(/^card template$/, function(callback)
    {
        this.checkIfCardTemplateExists(callback);
    });

    this.When(/^user enters question$/, function(callback)
    {
        this.enterQuestionToCard(callback);
    });

    this.When(/^user enters answer$/, function(callback)
    {
        this.enterAnswerToCard(callback);
    });

    this.When(/^hit the button 'add card'$/, function(callback)
    {
        this.addCard(callback);
    });

    this.Then(/^the card will be saved$/, function(callback)
    {
        this.checkIfCardSaved(callback);
    });

    this.Then(/^add to the deck$/, function(callback)
    {
        this.addCardToDeck(callback);
    });

    this.When(/^hit the button 'cancel'$/, function(callback)
    {
        this.cancelCardCreation(callback);
    });

    this.Then(/^the card will be discarded$/, function(callback)
    {
        this.checkIfCardDiscarded(callback);
    });

}; 