var directory = directory || {};
directory.Routers = directory.Routers || {};

directory.Routers.People = Backbone.Router.extend({
  routes: {
    '': 'showPeople',
    'people/:id': 'showPerson'
  },
  showPeople: function() {
    console.log('showing people');
    var peopleView = new directory.Views.PeopleIndex({ collection: directory.phoneBook });
    peopleView.render();
  },
  showPerson: function(id) {
    console.log('showing person with id ' + id);
    var personView = new directory.Views.PersonView({ model: directory.phoneBook.get(id) });
    personView.render();
  }
});

