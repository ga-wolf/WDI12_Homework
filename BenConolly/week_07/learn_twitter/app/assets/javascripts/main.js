_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

app.twitterfeed = new app.Tweets();

app.router = new app.AppRouter();

$(document).ready(function () {
  app.twitterfeed.fetch().done(function () {
    Backbone.hsitory.start({pushstate: true})
  })
})