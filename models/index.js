var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.DATABASEURL, { useMongoClient: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");