var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = require('./models/idea.js');

app.get('/api/ideas', function ideaIndex(req, res) {
  db.Idea.find({}, function(err, ideas) {
    res.json(ideas)
  })
})

app.post('/api/ideas', function ideaCreate(req, res) {
  console.log('body', req.body);

  db.Idea.create(req.body, function(err, idea) {
    if (err) { console.log('error', err); }
    console.log(idea);
    res.json(idea);
  });
});

app.get('/api/ideas/:id', function ideaShow(req, res) {
  console.log('we want idea #' + req.params.id);
  db.Idea.findOne({_id: req.params.id}, function(err,idea) {
    res.json(idea);
  });
})

app.delete('/api/idea/:id', function deleteIdea(req,res) {
  db.Idea.remove({_id: req.params.id}, function(err) {
    if (err) { return console.log(err); }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send(); // everything is a-OK
  });
});

app.put('/api/ideas/:id', function updateIdea(req,res) {
  db.Idea.findOne({_id: req.params.id}, function(err, foundIdea) {
    foundIdea.name = req.body.name;
    foundIdea.difficulty = req.body.difficulty;
    foundIdea.plan = req.body.plan;
    foundIdea.achieved = req.body.achieved;
    foundIdea.save (function(err, saved) {
      if(err) { console.log('error', err); }
      res.json(saved);
    });
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
