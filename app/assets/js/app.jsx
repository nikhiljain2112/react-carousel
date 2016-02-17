
var React = require('react/addons');
    Carousel = require('./components/carousel.jsx'),
    data = require('../../data/carousel.js'),
    actions = require('./utils/actions.js');

// App state , track the current image 
state = {
    currentSlide: 0,
    data: data
};

var App = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<Carousel data={state.data} />
					</div>
				</div>
			</div>
		)
	}
});


var myTimer = setInterval(nextImage, 5000);

module.exports.render = function(state){
  clearInterval(myTimer);
  myTimer = setInterval(nextImage, 5000);
  React.render(<App />,document.getElementById('carousel'));
}

function nextImage(){
  actions.toggleNext();
}

this.render();
nextImage();