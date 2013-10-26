// Class that represents a router.
var Router = (function () {

    var defaultRouter,pagename,routes,div_view,map;

    function Router(div) {
        pagename = "Exam Prepper ";
        routes = new Array();
        defaultRouter = null;
        div_view = div;
    }

    Router.prototype.getDiv = function () {
        return div_view;
    };

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
    return Router;
})();

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
        this.loadRoutePage(router.getDiv(), this.path);
        var tempArray = this.patternRegEx.exec(hash);
        tempArray = (tempArray == undefined) ? Array() : tempArray;
        var myMap = new MyMap();
        for (i=1; i< tempArray.length; i++) myMap.set(this.values[i-1], tempArray[i]);
        router.setVariables(myMap);
        document.title = router.getPageName()
        if (this.title.length > 0) document.title +=  " - " + this.title;
    };

    RouterItem.prototype.test = function(hash) {
        return this.patternRegEx.test(hash);
    };

    // Loads the content from path with ajax and replaces the html of div_view
    RouterItem.prototype.loadRoutePage = function(div_view, path)
    {
        $.ajax(path)
            .done(function(data) {
                div_view.html(data);
            })
            .fail(function()
            {
                div_view.html("failed to loading: " + path);
            });
    }

    return RouterItem;
})();