var db = require('./models')

var ideaList = [];

ideaList.push({
  name: 'Hike',
  difficulty: 'Easy',
  plan: 'Ask Isabel to come on a small hike, 5.2 miles with a hill. About 30 min drive each way. Estimated 5 hour effort',
  achieved: false
})
ideaList.push({
  name: 'Sailing',
  difficulty: 'Difficult',
  plan: 'Find a place to charter or borrow a boat for Isabel to sail (with me tagging along). Need to find boat, water, and make sure Isabel is allowed to actually sail',
  achieved: false
})
ideaList.push({
  name: 'Dinner',
  difficulty: 'Easy',
  plan: 'Take Isabel to Sushi place on El Camino',
  achieved: false
})
ideaList.push({
  name: 'Concert',
  difficulty: 'Moderate',
  plan: 'Go to a concert with Isabel. Need to find a concert to take her to',
  achieved: false
})

db.Idea.remove({}, function(err, ideas){

  db.Idea.create(IdeaList, function(err, ideas){
    if (err) { return console.log('ERROR', err); }
    console.log("all ideas:", ideas);
    console.log("created", ideas.length, "ideas");
    process.exit();
  });

});
