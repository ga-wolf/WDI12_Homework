var app = app || {}

app.Tweet = Backbone.Model.extend({
  urlRoot: '/tweets',
  defaults: {
    user: '@noviny'
    content: 'Not Invented Here'
  }
});