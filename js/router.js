// Class that represents a router.
	var Router = (function () {
	
		function Router(div_view) {
			this.routes = new Array();
			this.defaultRouter = null;
			this.div_view = div_view;
		}
		
		Router.prototype.Add = function (pattern, path) {
			this.routes.push(new RouterItem(pattern, path));
		};
		
		Router.prototype.Route = function(hash) {
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
		
		return Router;	
	})();
	
	// Class that represents a single route.
	var RouterItem = (function () {

		function RouterItem(pattern, path) {
			this.patternRegEx = new RegExp(pattern);
			this.path = path;
		}
		
		RouterItem.prototype.Route = function(router, hash) {
			this.loadRoutePage(router.div_view, this.path);
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