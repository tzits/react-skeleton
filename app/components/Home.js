var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Me</h1>
        <Link to='/ideas'>
          <button>:D</button>
        </Link>
      </div>
    )
  }
})

module.exports = Home
