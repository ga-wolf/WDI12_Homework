var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var AppViewHTML = $('#appView').html();
    this.$el.html(AppViewHTML)
    this.collection.each(function (post) {
      var tweetListView = new app.TweetListView({model: tweet}) 
      tweetListView.render()
    })
  }
});