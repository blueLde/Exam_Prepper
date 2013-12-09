Feature: Manage Deck (CRUD)
	In order to create, read, update and delete a deck
	As a user
	
	Scenario: Create Deck
		When user enters title
		And user enters description
		And add some cards
		And hit the button 'Save'
		Then the deck will be saved
		And synchronized with the server
		
	Scenario: Read Deck
		When user enters the name of the deck
		And hit the button 'Search'
		Then all found decks will be shown
		And the user can click on one to read the deck
		
	Scenario: Update Deck
		Given a selected deck
		When the user hit the button 'Edit Deck'
		Then the deck will be openend
		And the user can update the deck
	
	Scenario: Delete Deck
		Given a selected deck
		When user hit the button 'Remove Deck'
		Then the deck will be deleted
		And the client tells the server to delete the deck
		And the server will delete the deck