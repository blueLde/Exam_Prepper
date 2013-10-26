// Class that represents the App.
var App = (function () {

    function App() {

    }

    App.prototype.add = function (pattern, path, title) {
        this.routes.push(new RouterItem(pattern, path, title));
    };

    return App;
})();

//init
$(function() {
    // Bind the event.
    $(window).hashchange( function(){
       router.route();
    });
    //Create Touter
    router = new Router($("#main_view"));
    router.addDefaultRouter("/", "pages/view_index.html");
    router.add("/study", "pages/view_studies.html","Studies");
    router.add("/login", "pages/login.html","Login");
    router.add("/study/new", "pages/new_study.html","New Study");
    router.add("/study/:studyid:/edit", "pages/edit_study.html","Edit Study");
    router.add("/study/:studyid:/study/:cardid:", "pages/study_card.html", "Study Card");
    router.add("/study/:studyid:", "pages/study.html", "Study");
    router.add("/deck", "pages/view_decks.html","Decks");
    router.add("/deck/new", "pages/new_deck.html","New Deck");
    router.add("/deck/:deckid:/edit", "pages/edit_deck.html", "Edit Deck");
    router.add("/deck/:deckid:/edit/:cardid:", "pages/edit_card.html","Edit Card");
    // trigger the event on page load
    $(window).hashchange();


});