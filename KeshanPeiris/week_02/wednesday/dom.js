var button = document.getElementById('lib-button');
var computeLib = function(){
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var someone = document.getElementById("person").value;
  alert( someone + " You look like a " + adjective+" " + noun)
};
button.addEventListener('click', computeLib);