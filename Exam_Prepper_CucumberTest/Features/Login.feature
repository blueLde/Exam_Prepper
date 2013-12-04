<<<<<<< Updated upstream
Feature: Login
	In order to authenticate the user
	As a user
	
	Scenario: Authentication successful
		When user enters username
		And user enters password
		And hit the button 'Login'
		Then the userdata will be checked
		And if successful
		And a cookie will be set
		And a successful message will be shown
		
	Scenario: Authentication not successful
		When user enters username
		And user enters password
		And hit the button 'Login'
		Then the userdata will be checked
		And if unsuccessful
=======
Feature: Login
	In order to authenticate the user
	As a user
	
	Scenario: Authentication successful
		When user enters username
		And user enters password
		And hit the button 'Login'
		Then the userdata will checked
		And a cookie will be set
		And a successful message will be shown
		
	Scenario: Authentication not successful
		When user enters username
		And user enters password
		And hit the button 'Login'
		Then the userdata will be checked
>>>>>>> Stashed changes
		And an 'authentication failed' message will be shown