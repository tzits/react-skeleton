var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <nav>
          <Link to='/'>
            Home
          </Link>
        </nav>
        <h1>Help!</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
