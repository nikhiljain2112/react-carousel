var React = require('react/addons'),
    Pager = require('./pager.jsx');

// Pagination
var Pagination = React.createClass({
  render: function() {
    var paginationNodes = this.props.data.map(function (paginationNode, index) {
    
      return (
        <Pager id={index} />
      );
    });

    return (
      <div className="pagination">
        {paginationNodes}
      </div>
    );
  }
});


module.exports = Pagination;