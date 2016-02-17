var React = require('react/addons'),
  Pagination = require('./pagination.jsx'),
  Controls = require('./controls.jsx'),
  Slides = require('./slides.jsx');

var Carousel = React.createClass({
  render: function() {
    return (
      <div className='slideshow'>
        <Slides data={this.props.data} />
        <Pagination data={this.props.data} />
        <Controls />
      </div>
    );
  }
});

module.exports = Carousel;