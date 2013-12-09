<<<<<<< Updated upstream
module.exports = function()
{
    this.When(/^user enters title$/, function(callback)
    {
        this.enterStudyTitle(callback);
    });

    this.When(/^add some decks$/, function(callback)
    {
        this.addDeckToStudy(callback);
    });

    this.When(/^hit the button 'Save'$/, function(callback)
    {
        this.saveStudy(callback);
    });

    this.Then(/^the study will be saved$/, function(callback)
    {
        this.checkIfStudyIsSaved(callback);
    });

    this.Then(/^synchronized with the server$/, function(callback)
    {
        this.synchronizeStudyWithServer(callback);
    });

    this.When(/^user selects a study$/, function(callback)
    {
        this.selectStudy(callback);
    });

    this.When(/^hit the button 'Edit Study'$/, function(callback)
    {
        this.clickEditStudy(callback);
    });

    this.Then(/^the study will be opened$/, function(callback)
    {
        this.checkIfStudyIsOpened(callback);
    });

    this.Then(/^the user can read the study$/, function(callback)
    {
        this.readStudy(callback);
    });

    this.Given(/^a selected study$/, function(callback)
    {
        this.checkIfStudyIsSelected(callback);
    });

    this.When(/^the user hit the button 'Edit Study'$/, function(callback)
    {
        this.clickEditStudy(callback);
    });

    this.Then(/^the user can update the study$/, function(callback)
    {
        this.updateStudy(callback);
    });

    this.When(/^user hit the button 'Remove Study'$/, function(callback)
    {
        this.removeStudy(callback);
    });

    this.Then(/^the study will be deleted$/, function(callback)
    {
        this.checkIfStudyIsDeleted(callback);
    });

    this.Then(/^the client tells the server to delete the study$/, function(callback)
    {
        this.tellServerToDeleteStudy(callback);
    });

    this.Then(/^the server will delete the study$/, function(callback)
    {
        this.checkIfServerDeletedStudy(callback);
    });

}; 
=======
module.exports = function()
{
	this.When(/^user enters title$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^add some decks$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^hit the button 'Save'$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the study will be saved$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^synchronized with the server$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^user selects a study$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^hit the button 'Edit Study'$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the study will be opened$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the user can read the study$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Given(/^a selected study$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^the user hit the button 'Edit Study'$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the deck will be openend$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the user can update the deck$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^user hit the button 'Remove Study'$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the study will be deleted$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the client tells the server to delete the study$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^the server will delete the study$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

};
>>>>>>> Stashed changes
