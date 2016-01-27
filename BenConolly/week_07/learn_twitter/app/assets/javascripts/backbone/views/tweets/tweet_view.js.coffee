LearnTwitter.Views.Tweets ||= {}

class LearnTwitter.Views.Tweets.TweetView extends Backbone.View
  template: JST["backbone/templates/tweets/tweet"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
