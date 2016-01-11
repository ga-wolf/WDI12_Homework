var directory = directory || {};
directory.Models = directory.Models || {};

directory.Models.Person = Backbone.Model.extend({
  urlRoot: '/people',
  defaults: {
    name: 'n/a',
    phone: 'n/a',
    email: 'n/a',
    address: 'n/a',
    city: 'n/a'
  }
});
