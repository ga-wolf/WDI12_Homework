var app = app || {}

app.Tweets Backbone.Collection.extend({
  url: '/tweets',

  model: app.Tweet
});