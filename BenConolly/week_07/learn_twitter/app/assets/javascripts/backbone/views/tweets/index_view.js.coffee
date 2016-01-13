LearnTwitter.Views.Tweets ||= {}

class LearnTwitter.Views.Tweets.IndexView extends Backbone.View
  template: JST["backbone/templates/tweets/index"]

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (tweet) =>
    view = new LearnTwitter.Views.Tweets.TweetView({model : tweet})
    @$("tbody").append(view.render().el)

  render: =>
    @$el.html(@template(tweets: @collection.toJSON() ))
    @addAll()

    return this
