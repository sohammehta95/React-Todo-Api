var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://soham:soham1@ds125031.mlab.com:25031/react-todo-db', { useMongoClient: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");