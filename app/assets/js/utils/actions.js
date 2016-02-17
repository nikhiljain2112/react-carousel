var React = require('react/addons'),
    data = require('../../../data/carousel.js'),
    App = require('../app.jsx');

// State transitions
var actions = {

    //show the next image
    toggleNext: function() {
        var current = state.currentSlide;
        var next = current + 1;

        if (next > state.data.length - 1) {
            next = 0;
        }

        changeCurrentCaption(current);
        activateCurrentImage(current);
        state.currentSlide = next;

        App.render(state);
    },

    //show the previous image
    togglePrev: function() {
        var current = state.currentSlide;
        activateCurrentImage(current);
        var prev = current - 1;

        if (prev < 0) {
            prev = state.data.length - 1;
        }

        state.currentSlide = prev;
        changeCurrentCaption(current);
        App.render(state);
    },

    //show the image on clicked index
    toggleCircle: function(id) {
        var current = state.currentSlide;
        var currentIndex = id;
        state.currentSlide = currentIndex;
        changeCurrentCaption(currentIndex);
        activateCurrentImage(id);

        App.render(state);
    }
}

/*
 * add css class to currently active image circle
 */
function activateCurrentImage(id) {
    var elems = document.getElementsByTagName('span');

    for (var i = 0; i < elems.length; i++) {
        elems[i].className = 'pager';
    }

    document.getElementById(id).className = 'activeImage';
}

/*
 * add the caption of the current image to caption div
 */
function changeCurrentCaption(index) {
    var caption = data[index].caption;
    document.getElementById('caption_div').innerHTML = caption;
}

module.exports = actions;