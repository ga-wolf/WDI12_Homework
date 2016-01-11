

var directory = directory || {};
directory.Views = directory.Views || {};

directory.Views.PersonView = Backbone.View.extend({
  el: '#main',
  initialize: function() {
    this.template = _.template( $('#personView').html() );
    // console.log('person view!!!!!!!!!!' + this.template());
  },
  render: function() {
    console.log('show person view ' + this.model.attributes );
    this.$el.html( this.template( this.model.toJSON() ) );
  }
});