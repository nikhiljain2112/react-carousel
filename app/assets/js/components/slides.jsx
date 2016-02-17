var React = require('react/addons'),
    Slide = require('./slide.jsx');

// Slides
var Slides = React.createClass({
  render: function() {

    var slidesNodes = this.props.data.map(function (slideNode, index) {
         var isActive = state.currentSlide === index;
          return (
              <Slide active={isActive}  imagePath={slideNode.img} imageAlt={slideNode.caption}  />
          );
    });

    return (
      <div className="slides">
        {slidesNodes}
      </div>
    );
  }
});

module.exports = Slides;