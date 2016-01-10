var app = app || {};

var TodoList = Backbone.Collection.extend({
  model: app.Todo,

  // save all todo items under todos-backbone namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  // get all completed items
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },

  // get incomplete items
  remaining: function() {
    return this.without.apply( this, this.completed() );
  },

  // sequence generator
  nextOrder: function() {
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  // adds items sorted by 'order'
  comparator: function( todo ) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();