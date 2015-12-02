// When robots come off the factory floor, they have no name.

// The first time you boot them up, a random name is generated, such as RX837 or BC811.

// Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.

// For bonus points

// Did you get it working and is the code clean? If you want to, these are some additional things you could try:

// Random names means a risk of collisions. Make sure the same name is never used twice.

// Do this in JavaScript please, ideally you'd be able to do this sort of thing...

// var robot = Robot.create() 
// robot.reset()

// var randomNum = Math.random();
//   if ( randomNum < 0.3 ) {
//       ghost[i].body.velocity.x = 0;
//       ghost[i].body.velocity.y = -150;
//       ghost[i].animations.play("up");
//   }
// }


// var Car2 = Object.create(null); //this is an empty object, like {}
// Car2.prototype = {
//   getInfo: function() {
//     return 'A ' + this.color + ' ' + this.desc + '.';
//   }
// };
 
// var car2 = Object.create(Car2.prototype, {
//   //value properties
//   color:   { writable: true,  configurable:true, value: 'red' },
//   //concrete desc value
//   rawDesc: { writable: false, configurable:true, value: 'Porsche boxter' },
//   // data properties (assigned using getters and setters)
//   desc: { 
//     configurable:true, 
//     get: function ()      { return this.rawDesc.toUpperCase();  },
//     set: function (value) { this.rawDesc = value.toLowerCase(); }  
//   }
// }); 
// car2.color = 'blue';
// alert(car2.getInfo()); //displays 'A RED PORSCHE BOXTER.'



//********************MY TRY:********************

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// var robot = Object.create(null);
// robot.prototype = {
//   getInfo: function() {
//     return "The name of this Robot is " + this.letter + ' ' + this.number + ".";
//   }
// };

// var Robot = Object.create(robot.prototype, {
//   letters: { writable: true, configurable: true, value: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]},
//   rawDesc: { writable: false, configurable: true, value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]},
//   desc: {
//     configurable: true, 
//     get: function() { return this.rawDesc.toUpperCase(); },
//     set: function(value) {this.rawDesc = value.toLowerCase(); } 
//   }
// });

// Robot.letter = 'b';
// console.log(Robot.getInfo());




//********************JACKS WAY********************


//var robot = Robot.create()
//robot.name;
//robot.reset();

// Generate a random string of characters
// Generate some random numbers
// Create function needs to use those previously mentioned functions
// And the reste function is a bit more tricky

var Robot = {

  generateCharacters: function ( length ) {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var characters = "";

    for ( var i = 0; i < length; i++ ) {
      var randomNumber = Math.floor( Math.random() * charset.length );
      characters += charset[ randomNumber ];
    }

    return characters;
  },

  generateNumbers: function ( min, max ) {
    var randomNumber = Math.floor( Math.random() * (max - min) + min );
    return randomNumber;
  },

  create: function () {
    return {
      name: this.generateCharacters(2) + this.generateNumbers(100, 999),
      reset: function () {
        this.name = Robot.generateCharacters(2) + Robot.generateNumbers(100, 999)
        return this.name;
      }
    };
  }

};