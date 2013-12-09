Feature: Create Review Card
	In order to create and save a review card
	As a user
	
	Scenario: Create and save review Card
		Given card template
		When user enters question
		And user enters answer
		And hit the button 'add card'
		Then the card will be saved
		And add to the deck
		
	Scenario: Create card without saving
		Given card template
		When user enters question
		And user enters answer
		And hit the button 'cancel'
		Then the card will be discarded