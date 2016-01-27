var directory = directory || {};
directory.Views = directory.Views || {};

directory.Views.PeopleIndex = Backbone.View.extend({
  el: '#main',

  render: function() {
    console.log('show people list');
    this.$el.html($('#peopleView').html());
    this.collection.each(function (person) {
      var personListView = new directory.Views.PersonListView({model: person});
      $('ul#people').append( personListView.render().el );
    });
  }

});
