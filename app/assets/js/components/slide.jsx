var React = require('react');

var Slide = React.createClass({
  render: function() {

    var classes = React.addons.classSet({
      'slide': true,
      'slide--active': this.props.active
    });

    return (
      <div className={classes}>
        <img src={this.props.imagePath} alt={this.props.imageAlt} />
      </div>
    );
  }
});

module.exports = Slide;