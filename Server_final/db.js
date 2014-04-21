var Datastore = require('nedb'),
	db = new Datastore({ filename: './db/data.nedb', autoload: true });
	
module.exports.db = db;