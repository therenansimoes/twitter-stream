var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var io = require('socket.io-client');
var TweetItem = require('./tweetitem.jsx');

var TweetList = React.createClass({
  render: function () {
    var that = this;
    var tweetNodes = this.props.data.map(function (item, index) {
      return (
        <TweetItem text={item.text}></TweetItem>
      );
    });
    return (
      <ul className="tweets">
        {tweetNodes}
      </ul>
    )
  }
});

module.exports = TweetList;
