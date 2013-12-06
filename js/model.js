function Deck(title,desciption) {
    var self = this;
    self.deckID = ko.observable("1");
    self.title = ko.observable(title);
    self.desciption = ko.observable(desciption);
    self.count = ko.observable(0);
    self.edit = false;
    self.labels = ko.observableArray();
    self.cards =  ko.observableArray();
    self.selectedCard = ko.observable(new Card('',''));
    self.getSectedID = function()
    {
        return self.selectedCard().cardID();
    }
    self.setSelectedCard = function(card)
    {
        self.selectedCard(card);
    }
    self.mapObj = function(jsObj)
    {
        self.title(jsObj.title);
        self.desciption(jsObj.desciption);
        self.deckID(jsObj.deckID);
        self.count(jsObj.count);
        self.edit = jsObj.edit;
        labels = jsObj.labels;
        for (var o = 0; o < labels.length; ++o)
        {
            label = labels[o];
            labelModel = new Label(label.name,label.color);
            self.labels().push(labelModel);
        }
        cards = jsObj.cards;
        for (var o = 0; o < cards.length; ++o)
        {
            card = cards[o];
            cardModel = new window[card.type](card.question);
            cardModel.mapObj(card);
            self.cards().push(cardModel);
        }
    }
}

var Label = function(name,color)
{
    var self = this;
    self.name = name;
    self.color = ((typeof color !== 'undefined') && (color.length >= 1))?color:'success';
    self.labelClass = ko.computed(function() {
        return "label label-"+self.color;
    }, self);
}

var Card = function(question) {
    var self = this;
    self.cardID = ko.observable('1');
    self.question = ko.observable(question);
    self.type = ko.observable("ReviewCard");
    self.mapObj = function(obj)
    {
        self.question(obj.question);
        self.cardID(obj.cardID);
        self.type(obj.type);
    }
};

var ReviewCard = function(question,answer) {
    var self = this;
    ko.utils.extend(self, new Card(question));
    self.answer = ko.observable(answer);
    self.mapObj = function(obj)
    {
        self.question(obj.question);
        self.cardID(obj.cardID);
        self.type(obj.type);
        self.answer(obj.answer);
    }
};

function Study() {
	var self = this;

	self.studyID = ko.observable('-1');
	self.title = ko.observable('Please Enter Name');
	self.studytype = ko.observable('none');
	var labels = ko.observableArray();
	myObservableArray.push('none');
	var dirty = {
		state : ko.observable(false)
	};
	this.cardProgress = 
		ko.observableArray();
	
}

var StudyPerDay = function() {
	this.cardsToStudyReamaining = ko.obervable('-1');
	this.studiedLastTime = ko.obervable('01.01.1980');
	this.numberOfCards = ko.obervable('-1');
};
StudyPerDay.inheritsFrom(Study);


var StudyPerDay = function() {
	this.layer = ko.obervable('-1');
	this.cardID = ko.obervable('01.01.1980');
	this.deckID= ko.obervable('-1');
	this.numberStudied= ko.obervable('-1');
};







var ViewModelDecks = function() {
    var self = this;
    self.decks = ko.observableArray();
    self.selectedDeck = ko.observable(new Deck('',''));
    self.newDeck = ko.observable(new Deck('',''));
    self.editDeck = ko.observable(new Deck('',''));
    self.getSectedID = function()
    {
        return self.selectedDeck().deckID();
    }
    self.setSelectedDeck = function(deck)
    {
        self.selectedDeck(deck);
    }
    self.setNewDeck = function(deck)
    {
        self.newDeck(deck);
    }
    self.setEditDeck = function(deck)
    {
        self.editDeck(deck);
    }
    self.mapObj = function(jsObject)
    {
        self.selectedDeck(jsObject.selectedDeck);
        decks = jsObject.decks;
        for (var i = 0; i < decks.length; ++i)
        {
            deck = decks[i];
            deckModel = new Deck(deck.title,deck.desciption);
            deckModel.mapObj(deck);
            self.decks().push(deckModel);
        }
    }
}
