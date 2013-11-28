// Class that represents the App.
var App = (function () {

    var privateVars;

    function App(viewDiv)
    {
        //create Router
        privateVars = new MyMap();
        privateVars.set('viewDiv',viewDiv);
        this.router = new Router(viewDiv);
        $(window).on('hashchange',function(){
            $a.hashchange.execute();
        });
    }

    // Class that represents a router.
    var Router = (function () {

        var defaultRouter,pagename,routes,div_view,map;

        function Router(div) {
            pagename = "Exam Prepper ";
            routes = new Array();
            defaultRouter = null;
            div_view = div;
        }

        Router.prototype.getPageName = function () {
            return pagename;
        };

        Router.prototype.setVariables = function (hashmap){
            if (hashmap instanceof MyMap) map = hashmap;
        };

        Router.prototype.hasVariable = function (name){
            return map.hasKey(name);
        };

        Router.prototype.getVariable = function (name){
            alert(map.getValueString());
            return map.get(name);
        };

        Router.prototype.addDefaultRouter = function (pattern, path, title) {
            defaultRouter  = new RouterItem(pattern, path, title);
        };

        Router.prototype.add = function (pattern, path, title) {
            routes.push(new RouterItem(pattern, path, title));
        };

        Router.prototype.go = function (path) {
            location.hash = path;
        };

        Router.prototype.route = function() {
            //show loading page
            div_view.html($a.loadingPage);
            //read Hash
            var hash = (location.hash.length > 0) ? location.hash.substring(1, location.hash.length) : "";
            // test routerItems
            for (i=0; i< routes.length; i++)
            {
                routerItem = routes[i];
                if (routerItem.test(hash))
                {
                    routerItem.route(this, hash);
                    return;
                }
            }
            defaultRouter.route(this, hash);
        };

        // Loads the content from path with ajax and replaces the html of div_view
        Router.prototype.loadRoutePage = function(path)
        {
            $.ajax({
                url: path,
                type: "GET",
                dataType: "html",
                timeout: 3000
            }).done(function(data) {
                    div_view.fadeOut(200,function(){div_view.html(data).fadeIn(200)});
                })
                .fail(function( jqXHR, textStatus)
                {
                    div_view.fadeOut(200,function(){div_view.html($a.errorPage).find('#textError').text(jqXHR.statusText).end().fadeIn(200)});
                });
        }

        // Class that represents a single route.
        var RouterItem = (function () {

            function RouterItem(pattern, path, title) {
                this.patternRegEx = new RegExp("^"+pattern.replace(/:(\w+):/g,"(\\w+)")+"$");
                this.pat = "^"+pattern.replace(/:(\w+):/g,"(\\w+)")+"$";
                var tempValues = pattern.match(/:(\w+):/g);
                this.values = (tempValues == undefined) ? Array() : tempValues;
                for (i=0; i< this.values.length; i++) this.values[i] = this.values[i].replace(/:/g,"");
                this.path = path;
                this.title = (title == undefined) ? "" : title;
            }

            RouterItem.prototype.route = function(router, hash) {
                var tempArray = this.patternRegEx.exec(hash);
                tempArray = (tempArray == undefined) ? Array() : tempArray;
                var myMap = new MyMap();
                for (i=1; i< tempArray.length; i++) myMap.set(this.values[i-1], tempArray[i]);
                router.setVariables(myMap);
                document.title = router.getPageName()
                if (this.title.length > 0) document.title +=  " - " + this.title;
                router.loadRoutePage(this.path);
            };

            RouterItem.prototype.test = function(hash) {
                return this.patternRegEx.test(hash);
            };

            return RouterItem;
        })();

        return Router;
    })();

    App.prototype.loadingPage = "<div class=\"row row-offcanvas row-offcanvas-right\"><div class=\"col-md-12\"><h2>Loading</h2><div id=\"loading\"><div class=\"text\"><img src=\"images/load.gif\" alt=\"\" style=\"width: 64px\"><p>Page is Loading...</p></div></div></div></div>";
    App.prototype.errorPage = "<div class=\"row row-offcanvas row-offcanvas-right\"><div class=\"col-md-12\"><h2>Error</h2><div id=\"loading\"><div class=\"text\"><img src=\"images/error.png\" alt=\"\" style=\"width: 150px\"><p id=\"textError\"></p></div></div></div></div>";

    var Menu = (function () {

        var modal;
        var functs;

        var init = function()
        {
            $('body').append("<div class=\"modal fade\" id=\"modalMenu\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" style=\"margin-top: 50px;\"><div class=\"modal-content\"><div class=\"modal-header\">Menu</div><div class=\"modal-body\"></div></div></div></div>");
            modal = $('#modalMenu').modal({keyboard: true,show:false,backdrop:true})
        };

        function Menu()
        {
            location.hash = location.hash.replace('/menu','');
        }

        Menu.prototype.hide = function()
        {
            if($('#modalMenu').length != 0) modal.modal('hide');
        };

        Menu.prototype.createEntry = function(title,funct)
        {
            entry = new Object();
            entry.title = title;
            entry.func = funct;
            return entry;
        };

        Menu.prototype.menuactive = false;

        Menu.prototype.show = function(functions)
        {
            if ($('#modalMenu').length == 0) init();
            $a.hashchange.setEvent(function(){
                if(/\/menu$/.test(location.hash))
                {
                    $a.menu.menuactive = true;
                }
                else if($a.menu.menuactive)
                {
                    $a.menu.menuactive = false;
                    $a.menu.hide();
                }
                else
                {
                    $a.controller.unset();
                    $a.router.route();
                    $a.controller.set(controller);
                }
            });
            functs = functions;
            modal.find('.modal-body').html('<div class="list-group" style="margin-bottom: 0px"></div>');
            for (var i = 0; i < functions.length; i++)
            {
                a = $('<a href="#" data-id="'+i+'" class="list-group-item">'+ functs[i].title+'</a>');
                a.click(function(){
                    $a.menu.hide();
                    i = $(this).attr('data-id');
                    setTimeout(functs[i].func,100);
                    return false;
                });
                modal.find('.modal-body .list-group').append(a);
            }
            modal.modal('show');
            location.hash = location.hash+"/menu";
            modal.on('hide.bs.modal', function () {
                location.hash = location.hash.replace('/menu','');
                setTimeout($a.hashchange.resetEvent,200);
            });
        };

        return Menu;
    })();

    App.prototype.menu = new Menu();

    var Messages = (function () {

        function Messages()
        {
        }

        Messages.prototype.error = function(text,title,callback)
        {
            title = (title != undefined) ? "Error - "+ title : "Error";
            callback = (typeof callback == 'function') ? callback : function(){};
            bootbox.dialog({
                message: text,
                title: title,
                className: "app-error-modal",
                buttons: {
                    success: {
                        label: "Close",
                        className: "btn-danger",
                        callback: callback
                    }
                }
            });
        };

        Messages.prototype.info = function(text,title,callback)
        {
            title = (title != undefined) ? "Info - "+ title : "Info";
            callback = (typeof callback == 'function') ? callback : function(){};
            bootbox.dialog({
                message: text,
                title: title,
                className: "app-error-modal",
                buttons: {
                    success: {
                        label: "Close",
                        className: "btn-primary",
                        callback: callback
                    }
                }
            });
        };

        return Messages;
    })();

    App.prototype.messages = new Messages();

    var Hashchange = (function () {

        var event = null;

        function Hashchange()
        {

        }

        Hashchange.prototype.setEvent = function(funct)
        {
            event = funct;
        };

        Hashchange.prototype.resetEvent = function(funct)
        {
            event = null;
        };

        Hashchange.prototype.defaultEvent = function()
        {
            $a.controller.unset();
            $a.router.route();
            $a.controller.set(controller);
        };

        Hashchange.prototype.execute = function()
        {
            if(event != null)
                event()
            else
                this.defaultEvent();
        };

        return Hashchange;
    })();

    App.prototype.hashchange = new Hashchange();

    var Controller = (function () {

        var controller = null;

        function Controller()
        {

        }

        Controller.prototype.set = function(cont)
        {
            controller = cont;
            controller.onLoad();
        };

        Controller.prototype.unset = function()
        {
            controller.onUnload();
            controller = null;
        };

        return Controller;
    })();

    App.prototype.controller = new Controller();

    var Logger = (function () {

        d = false;

        function Logger(debug)
        {
            d = debug;
        }

        Logger.prototype.log = function(msg)
        {
            if(d) console.log(msg);
        };
        return Logger;
    })();

    App.prototype.logger = new Logger(true);

    return App;
})();


//init
$(function() {
    //init App
    $a = new App($("#main_view"));
    $a.router.addDefaultRouter("/", "pages/view_index.html");
    $a.router.add("/login", "pages/view_login.html","Login");
    $a.router.add("/study", "pages/view_studies.html","Studies");
    $a.router.add("/study/new", "pages/new_study.html","New Study");
    $a.router.add("/study/:studyid:/edit", "pages/edit_study.html","Edit Study");
    $a.router.add("/study/:studyid:/study/:cardid:", "pages/view_study.html", "Study Card");
    $a.router.add("/study/:studyid:", "pages/view_study.html", "Study");
    $a.router.add("/deck", "pages/view_decks.html","Decks");
    $a.router.add("/deck/new", "pages/new_deck.html","New Deck");
    $a.router.add("/deck/:deckid:/edit/reviewcard/:cardid:", "pages/cards/review_edit.html","Edit Review Card");
    $a.router.add("/deck/:deckid:/add/reviewcard", "pages/cards/review_create.html","New Review Card");
    $a.router.add("/deck/:deckid:/edit", "pages/edit_deck.html", "Edit Deck");
    $a.router.add("/deck/:studyid:", "pages/view_deck.html", "Deck");
    $a.hashchange.execute();
});