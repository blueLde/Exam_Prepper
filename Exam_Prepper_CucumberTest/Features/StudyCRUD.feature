Feature: Manage Study (CRUD)
	In order to create, read, update and delete a study
	As a user
	
	Scenario: Create Study
		When user enters title
		And add some decks
		And hit the button 'Save'
		Then the study will be saved
		And synchronized with the server
		
	Scenario: Read Study
		When user selects a study
		And hit the button 'Edit Study'
		Then the study will be opened
		And the user can read the study
		
	Scenario: Update Study
		Given a selected study
		When the user hit the button 'Edit Study'
		Then the deck will be openend
		And the user can update the deck
	
	Scenario: Delete Study
		Given a selected study
		When user hit the button 'Remove Study'
		Then the study will be deleted
		And the client tells the server to delete the study
		And the server will delete the study