var axios = require('axios');

function getIdeas() {
  return axios.get('http://localhost:3000/api/ideas');
}

function getIdea(id) {
  return axios.get('http://localhost:3000/api/ideas' + ':' + id );
}

function removeIdea(id) {
  return axios.delete('http://localhost:3000/api/ideas' + ':' + id );
}

var helpers = {
  getIdeasInfo: function (ideas) {
    return axios.all(players.map(function () {
      return getIdeas()
    }))
    .then(function (info) {
      return info.map(function (idea) {
        return idea.data
      })
    })
    .catch(function (err) {console.warn('Error in getIdeaInfo: ', err)})
  }
};

module.exports = helpers;
