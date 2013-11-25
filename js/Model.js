/**
 * 
 */

function Deck() {
	var self = this;

	self.deckID = ko.observable('-1');
	self.title = ko.observable('Please Enter Name');
	self.desciption = ko.observable('Descibe your deck here...');
	var labels = ko.observableArray();
	myObservableArray.push('none');
	var dirty = {
		state : ko.observable(false)
	};
}

var Card = function(title, completed) {
	this.cardID = ko.observable('1');
	this.question = ko.observable('Please Enter A Question');
	this.cardType = ko.observable('none');
};

var ReviewCard = function() {
	this.answer = ko.obervable('Please enter your answer here');
};

ReviewCard.inheritsFrom(Card);

var ViewModel = function(cards) {

	this.cards =

	ko.observableArray(cards.map(function

	(cards) {
		return new

		card();
	}));


	this.add = function() {
		var current = this.current().trim();
		if (current) {
			this.cards.push(new Card(current));
			this.current('');
		}
	}.bind(this); 
	
	// remove a single todo
	this.remove = function(Card) {
		this.Cards.remove(Card);
	}.bind(this);

}
