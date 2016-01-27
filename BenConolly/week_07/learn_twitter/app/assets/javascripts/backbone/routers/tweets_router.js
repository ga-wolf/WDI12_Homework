var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/tweets/:id': 'viewTweet'
  },

  index: function () {
    var appView = app.AppView({collection: app.twitterfeed});
    appView.render()
  },

  viewPost: function (id) {
    var post = app.twitterfeed.get(id);
    var tweetView = new app.TweetView({model: tweet})
    tweetView.render()
  }

});