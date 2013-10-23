// Class that represents a router.
var Router = (function () {

    function Router(div_view) {
        this.routes = new Array();
        this.defaultRouter = null;
        this.div_view = div_view;
    }

    Router.prototype.add = function (pattern, path, title) {
        this.routes.push(new RouterItem(pattern, path, title));
    };

    Router.prototype.route = function(hash) {
        for (i=0; i<this.routes.length; i++)
        {
            routerItem = this.routes[i];
            if (routerItem.Test(hash))
            {
                routerItem.Route(this, hash);
                return;
            }
        }
        this.defaultRouter.Route(this, hash);
    };

    // Loads the content from path with ajax and replaces the html of div_view
    Router.prototype.loadRoutePage = function(div_view, path)
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

    return Router;
})();

// Class that represents a single route.
var RouterItem = (function () {

    var pagename = "Exam Prepper ";

    function RouterItem(pattern, path, title) {
        this.patternRegEx = new RegExp(pattern);
        this.path = path;
        if (title == undefined) title = "";
        this.title = title;
    }

    RouterItem.prototype.Route = function(router, hash) {
        this.loadRoutePage(router.div_view, this.path);
        if (this.title.length > 0)
        {
            document.title = pagename + " - " + this.title;
        }
        else
        {
            document.title = pagename;
        }
    };

    RouterItem.prototype.Test = function(hash) {
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