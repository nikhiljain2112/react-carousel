var React = require('react/addons'),
actions = require('../utils/actions.js');

var Pager = React.createClass({
  toggleCircle: function() {
    actions.toggleCircle(this.props.id);
  },

  render: function() {
    return (
      <span className='pager' id= {this.props.id} onClick={this.toggleCircle}></span>
    );
  }
});

module.exports = Pager;