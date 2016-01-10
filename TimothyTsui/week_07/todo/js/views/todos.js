var app = app || {};

// Todo item view

app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#item-template').html() ),

  events: {
    'click .toggle': 'togglecompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close',
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    // remove is inherited from Backbone.View
    // it removes el from the DOM and call stopListening to all listenTo events
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  // re-renders the titles fo the todo item
  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    this.$el.toggleClass( 'completed', this.model.get('completed') );
    this.toggleVisible();

    this.$input = this.$('.edit');
    return this;
  },


  toggleVisible: function () {
    this.$el.toggleClass( 'hidden', this.isHidden());
  },

  // determines if item should be hidden
  isHidden: function () {
    var isCompleted = this.model.get('completed');
    return (
      (!isCompleted && app.TodoFilter === 'completed')
      || (isCompleted && app.TodoFilter === 'active')
    );
  },

  togglecompleted: function() {
    this.model.toggle();
  },

  // switch item to editing mode, displaying the input field
  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // close editing mode, saving changes to todo
  close: function() {
    var value = this.$input.val().trim();

    if ( value ) {
      this.model.save({ title: value });
    }

    this.$el.removeClass('editing');
  },

  // if you hit 'enter', we're done editing the item
  updateOnEnter: function( e ) {
    if ( e.which === ENTER_KEY ) {
      this.close();
    }
  },

  // remove item, destroy the model from localStorage and delete from view
  clear: function() {
    this.model.destroy();
  }
});

