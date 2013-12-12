module.exports = function()
{

    this.World = require('./seleniumWorld').World;

    this.When(/^user enters username$/, function(callback)
    {	
        this.enterUsername(callback);
    });

    this.When(/^user enters password$/, function(callback)
    {
     	this.enterPW(callback);
    });

    this.When(/^hit the button 'Login'$/, function(callback)
    {
        this.clickLoginButton(callback);
    });

    this.Then(/^the userdata will be checked$/, function(callback)
    {
        this.checkUserData(callback);
    });

    this.Then(/^if successful$/, function(callback)
    {
        this.checkIfLoginSuccessful(true, callback);
    });

    this.Then(/^a cookie will be set$/, function(callback)
    {
        this.checkCookie(callback);
    });

    this.Then(/^a successful message will be shown$/, function(callback)
    {
        this.ckeckIfLoginSuccessfulMessage(callabck);
    });

    this.Then(/^if unsuccessful$/, function(callback)
    {
        this.checkIfLoginSuccessful(false, callback);
    });

    this.Then(/^an 'authentication failed' message will be shown$/, function(callback)
    {
        this.checkLoginFailedMessage(callback);
    });
};
