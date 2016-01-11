var directory = directory || {};
directory.Collections = directory.Collections || {};

directory.Collections.People = Backbone.Collection.extend({

  model: directory.Models.Person,
  url: '/people'
});
