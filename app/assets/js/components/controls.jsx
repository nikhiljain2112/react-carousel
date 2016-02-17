
var React = require('react/addons'),
actions = require('./../utils/actions.js');


// Prev and Next buttons
var Controls = React.createClass({
  showPrev: function() {
    actions.togglePrev();
  },

  showNext: function() {
    actions.toggleNext();
  },

  render: function() {
    return (
      <div className='controls'>
        <div className='arrow arrow_prev' onClick={this.showPrev}></div>
        <div className='arrow arrow_next' onClick={this.showNext}></div>
        <div className='caption_div' id= 'caption_div' >Carousel title 1</div>
      </div>
    );
  }
});

module.exports = Controls;