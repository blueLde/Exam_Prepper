module.exports = function()
{

    this.World = require('./phantomWorld').World;
    
	this.When(/^user enters username$/, function(callback) {
	  this.enterUsername(callback);
	});

	this.When(/^user enters password$/, function(callback) {
	  this.enterPW(callback);
	});

	this.When(/^hit the button 'Login'$/, function(callback) {
	  this.clickLoginButton(callback);
	});

	this.Then(/^the userdata will checked$/, function(callback) {
	  this.checkUserData(callback);
	});

	this.Then(/^a cookie will be set$/, function(callback) {
	  callback();
	});

	this.Then(/^a successful message will be shown$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback();
	});

	this.Then(/^the userdata will be checked$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback();
	});

	this.Then(/^an 'authentication failed' message will be shown$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback();
	});
};