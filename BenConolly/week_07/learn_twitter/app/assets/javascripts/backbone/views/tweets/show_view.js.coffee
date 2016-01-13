LearnTwitter.Views.Tweets ||= {}

class LearnTwitter.Views.Tweets.ShowView extends Backbone.View
  template: JST["backbone/templates/tweets/show"]

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
