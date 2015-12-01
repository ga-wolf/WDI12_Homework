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