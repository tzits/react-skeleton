var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = Schema({
  name: String,
  difficulty: String,
  plan: String,
  achieved: Boolean
});

var Idea = mongoose.model('Idea', IdeaSchema)

module.exports = Idea;
