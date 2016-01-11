_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var directory = directory || {};

directory.phoneBook = new directory.Collections.People();

directory.phoneBook.add([
    { id: 1, name: 'Tim', phone: 0451234567, email: 'tim@gmail.com', address: '123 fake st', city: 'sydney' },
    { id: 2, name: 'Bill', phone: 988912345, city: 'victoria' },
    { id: 3, name: 'Joyce', email: 'joyce@gmail.com' }
]);

var router = new directory.Routers.People();
$(document).ready(function(){
  console.log('testing code');
  Backbone.history.start();

});