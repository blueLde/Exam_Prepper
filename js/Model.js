Function.prototype.inheritsFrom = function( parentClassOrObject ){
    if ( parentClassOrObject.constructor == Function )
    {
        //Normal Inheritance
        this.prototype = new parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    }
    else
    {
        //Pure Virtual Inheritance
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
}

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

 function ViewModel(cards) {

	this.cards = 
	ko.observableArray();

	this.name = "ein Name";
	
	// add a single card
	this.add = function() {
		var current = this.current().trim();
		if (current) {
			this.cards.push(new Card(current));
			this.current('');
		}
	}.bind(this); 
	
	// remove a single card
	this.remove = function(Card) {
		this.Cards.remove(Card);
	}.bind(this);

}





ko.applyBindings(new ViewModel(new Card()));
