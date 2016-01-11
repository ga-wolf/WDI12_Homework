var directory = directory || {};
directory.Models = directory.Models || {};

directory.Models.Person = Backbone.Model.extend({
  defaults: {
    name: 'n/a',
    phone: 'n/a',
    email: 'n/a',
    address: 'n/a',
    city: 'n/a'
  }
});
