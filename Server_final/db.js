var Datastore = require('nedb'),
	db_data = new Datastore({ filename: './db/data.nedb', autoload: true }),
	db_user = new Datastore({filename: './db/user.nedb', autoload: true});	

var db = new Object();
db.data = db_data;
db.user = db_user;

module.exports.db = db;