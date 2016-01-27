var directory = directory || {};
directory.Views = directory.Views || {};

directory.Views.PersonListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showPerson'
  },
  showPerson: function() {
    router.navigate('people/' + this.model.get('id'), true);
  },
  render: function() {
    console.log('making list item for person: ' + this.model.get('name'));
    this.$el.text(this.model.get('name'));
    return this;
  }
});