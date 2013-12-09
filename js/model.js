///Deck/////
function Deck(title,desciption) {
    var self = this;
    self.deckID = ko.observable("1");
    self.title = ko.observable(title);
    self.desciption = ko.observable(desciption);
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
        labels = jsObj.labels;
        for (var o = 0; o < labels.length; ++o)
        {
            label = labels[o];
            labelModel = new Label(label.name,label.color);
            self.labels.push(labelModel);
        }
        cards = jsObj.cards;
        for (var o = 0; o < cards.length; ++o)
        {
            card = cards[o];
            cardModel = new window[card.type](card.question);
            cardModel.mapObj(card);
            self.cards.push(cardModel);
        }
        self.title(jsObj.title);
        self.desciption(jsObj.desciption);
        self.deckID(jsObj.deckID);
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
    self.display = ko.computed(function() {
        return self.answer();
    });
    self.mapObj = function(obj)
    {
        self.question(obj.question);
        self.cardID(obj.cardID);
        self.type(obj.type);
        self.answer(obj.answer);
    }
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
            self.decks.push(deckModel);
        }
    }
}

///Study///

function Study(title) {
	var self = this;
	self.studyID = ko.observable('1');
	self.title = ko.observable(title);
	self.studytype = ko.observable('StudyPerDay');
    self.labels = ko.observableArray();
    self.decks =  ko.observableArray();
    self.selectedDeck =  ko.observable(new Deck('',''));
    self.deckstatistics =  ko.observableArray();
    self.extended = function(jsObj)
    {

    }
    self.mapObj = function(jsObj)
    {
        decks = jsObj.decks;
        for (var o = 0; o < decks.length; ++o)
        {
            deck = decks[o];
            deckModel = new Deck(deck.title,deck.desciption);
            deckModel.mapObj(deck);
            self.decks.push(deckModel);
        }
        deckstatistics = jsObj.deckstatistics;
        for (var o = 0; o < deckstatistics.length; ++o)
        {
            deckstatistic = deckstatistics[o];
            deckstatisticModel = new DeckStatistic(deckstatistic.deckID);
            deckstatisticModel.mapObj(deckstatistic);
            self.deckstatistics.push(deckstatisticModel);
        }
        labels = jsObj.labels;
        for (var o = 0; o < labels.length; ++o)
        {
            label = labels[o];
            labelModel = new Label(label.name,label.color);
            self.labels.push(labelModel);
        }
        self.title(jsObj.title);
        self.studyID(jsObj.studyID);
    }
}

var StudyPerDay = function(title) {
    var self = this;
    ko.utils.extend(self, new Study(title));
    self.studytype = 'StudyPerDay';
    self.cardsPerDay = ko.observable('0');
    self.studiedLastTime = ko.observable('01.01.1980');
    self.display = ko.computed(function() {
        return self.cardsPerDay()+" Cards per Day";
    });
    self.progress = ko.computed(function() {
        return 0+"%";
    });
    self.mapObj = function(jsObj)
    {
        decks = jsObj.decks;
        for (var o = 0; o < decks.length; ++o)
        {
            deck = decks[o];
            deckModel = new Deck(deck.title,deck.desciption);
            deckModel.mapObj(deck);
            self.decks.push(deckModel);
        }
        deckstatistics = jsObj.deckstatistics;
        for (var o = 0; o < deckstatistics.length; ++o)
        {
            deckstatistic = deckstatistics[o];
            deckstatisticModel = new DeckStatistic(deckstatistic.deckID);
            deckstatisticModel.mapObj(deckstatistic);
            self.deckstatistics.push(deckstatisticModel);
        }
        labels = jsObj.labels;
        for (var o = 0; o < labels.length; ++o)
        {
            label = labels[o];
            labelModel = new Label(label.name,label.color);
            self.labels.push(labelModel);
        }
        self.title(jsObj.title);
        self.studyID(jsObj.studyID);
        self.cardsPerDay(jsObj.cardsPerDay);
    }
}

var StudyFixDate = function(title) {
    var self = this;
    ko.utils.extend(self, new Study(title));
    self.studytype = 'StudyFixDate';
    self.extended = function(jsObj)
    {
        self.studiedToDate(jsObj.studiedToDate);
    }
    self.studyToDate = ko.observable('01.01.1980');
    self.display = ko.computed(function() {
        return "Study until "+self.studyToDate();
    });
    self.progress = ko.computed(function() {
        return 0+"%";
    });
    self.mapObj = function(jsObj)
    {
        decks = jsObj.decks;
        for (var o = 0; o < decks.length; ++o)
        {
            deck = decks[o];
            deckModel = new Deck(deck.title,deck.desciption);
            deckModel.mapObj(deck);
            self.decks.push(deckModel);
        }
        deckstatistics = jsObj.deckstatistics;
        for (var o = 0; o < deckstatistics.length; ++o)
        {
            deckstatistic = deckstatistics[o];
            deckstatisticModel = new DeckStatistic(deckstatistic.deckID);
            deckstatisticModel.mapObj(deckstatistic);
            self.deckstatistics.push(deckstatisticModel);
        }
        labels = jsObj.labels;
        for (var o = 0; o < labels.length; ++o)
        {
            label = labels[o];
            labelModel = new Label(label.name,label.color);
            self.labels.push(labelModel);
        }
        self.title(jsObj.title);
        self.studytype(jsObj.studytype);
        self.studyID(jsObj.studyID);
        self.studyToDate(jsObj.studyToDate);
    }
};

var DeckStatistic = function(deckID) {
    var self = this;
    self.deckID = ko.observable(deckID);
    self.cardsstatistic = ko.observableArray();
    self.mapObj = function(obj)
    {
        self.deckID(obj.deckID);
        cardsstatistics = jsObj.cardsstatistics;
        for (var o = 0; o < cardsstatistics.length; ++o)
        {
            cardsstatistic = cardsstatistics[o];
            cardsstatisticmodel = new CardsStatistic(cardsstatistic.cardID);
            cardsstatisticmodel.mapObj(cardsstatistic);
            self.cardsstatistics.push(cardsstatisticmodel);
        }
    }
};

var CardsStatistic = function(cardID) {
    var self = this;
    self.cardID = ko.observable(cardID);
    self.wronge = ko.observable(0);
    self.right = ko.observable(0);
    self.addRight = function()
    {
        self.right(self.right()+1);
    }
    self.mapObj = function(obj)
    {
        self.deckID(obj.deckID);
        self.wronge(obj.wronge);
        self.right(obj.right);
    }
};

var ViewModelStudy = function() {
    var self = this;
    self.studies = ko.observableArray();
    self.selectedStudy = ko.observable(new Study('',''));
    self.newStudy = ko.observable(new StudyPerDay('',''));
    self.editStudy = ko.observable(new StudyPerDay('',''));
    self.getSectedID = function()
    {
        return self.selectedStudy().studyID();
    }
    self.setSelectedStudy = function(deck)
    {
        self.selectedStudy(deck);
    }
    self.setNewStudy = function(deck)
    {
        self.newStudy(deck);
    }
    self.setEditStudy = function(deck)
    {
        self.editStudy(deck);
    }
    self.mapObj = function(jsObject)
    {
        self.selectedStudy(jsObject.selectedStudy);
        studies = jsObject.studies;
        for (var i = 0; i < studies.length; ++i)
        {
            study = studies[i];
            studyModel = new window[study.studytype](study.title);
            studyModel.mapObj(study);
            self.studies.push(studyModel);
        }
    }
}
