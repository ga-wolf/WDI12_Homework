// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

// Shortest intro to biochemistry EVAR:

// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.

// So back to nucleotides.

// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

// There are no other nucleotides.

// Make sure that you validate it has nucleotides!

// Find how many of each nucleotides are in a string that you pass in to a function
var nucleotides = {
  count:function(string,nucleotide){
    var nucleotideCount = 0;
    string = string.split('');

    for (var i = 0; i < string.length; i++) {
      var character = string[i]
      if (character === nucleotide) {
        nucleotideCount += 1 ;
      }
    };
    return nucleotideCount;


  },
  countAll: function (string){
    // var aCount = nucleotides.count(string, "A");
    // var cCount = nucleotides.count(string, "C");
    // var gCount = nucleotides.count(string, "G");
    // var tCount = nucleotides.count(string, "T");
    // var uCount = nucleotides.count(string, "U");
    return {
      "A": aCount,
      "C": cCount,
      "T": tCount,
      "G": gCount,
      "U": uCount
    }
  }
}














