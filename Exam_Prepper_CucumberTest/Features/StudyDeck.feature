Feature: Study Deck
	In order to study a deck
	As a user
	
	Scenario: study deck
		Given a deck
		When user hit the button 'study'
		And there are cards avaiable
		Then a card will be shown
		And the user answers it
		
	Scenario: study deck without avaiable cards
		Given a deck
		When user hit the button 'study'
		And there are no cards avaiable
		Then the progress will be saved
		And the deck will be synchronized