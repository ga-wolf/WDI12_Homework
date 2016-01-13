LearnTwitter.Views.Tweets ||= {}

class LearnTwitter.Views.Tweets.NewView extends Backbone.View
  template: JST["backbone/templates/tweets/new"]

  events:
    "submit #new-tweet": "save"

  constructor: (options) ->
    super(options)
    @model = new @collection.model()

    @model.bind("change:errors", () =>
      this.render()
    )

  save: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.unset("errors")

    @collection.create(@model.toJSON(),
      success: (tweet) =>
        @model = tweet
        window.location.hash = "/#{@model.id}"

      error: (tweet, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
