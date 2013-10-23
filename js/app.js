// Class that represents the App.
var App = (function () {

    function App(div_view) {

    }

    Router.prototype.add = function (pattern, path, title) {
        this.routes.push(new RouterItem(pattern, path, title));
    };

    return App;
})();

//init
$(function() {
    // Bind the event.
    $(window).hashchange( function(){
        // get hash without #
        var hash = "";
        if (location.hash.length > 0)
            hash = location.hash.substring(1, location.hash.length);
        // routing
        router.route(hash);
    });
    //Create Touter
    router = new Router($("#main_view"));
    router.defaultRouter = new RouterItem("/", "pages/view_index.html");
    router.add("/study$", "pages/view_studies.html","Studies");
    router.add("/login$", "pages/login.html","Login");
    router.add("/study/new$", "pages/new_study.html","New Study");
    router.add("/study/[0-9a-zA-Z]+/edit$", "pages/edit_study.html","Edit Study");
    router.add("/study/[0-9a-zA-Z]+/study/[0-9a-zA-Z]+$", "pages/study_card.html", "Study Card");
    router.add("/study/[0-9a-zA-Z]+$", "pages/study.html", "Study");
    router.add("/deck$", "pages/view_decks.html","Decks");
    router.add("/deck/new$", "pages/new_deck.html","New Deck");
    router.add("/deck/[0-9a-zA-Z]+/edit$", "pages/edit_deck.html", "Edit Deck");
    router.add("/deck/[0-9a-zA-Z]+/edit/[0-9a-zA-Z]+$", "pages/edit_card.html","Edit Card");
    // trigger the event on page load
    $(window).hashchange();


});