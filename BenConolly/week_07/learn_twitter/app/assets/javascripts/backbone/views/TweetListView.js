var app = app || {};

app.TweetListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    click: 'showTweet'
  },
  showTweet: function () {
    app.router.navigate('posts/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text(this.model.get("user"));
    this.$el.appendTo('#tweets')
  }
})