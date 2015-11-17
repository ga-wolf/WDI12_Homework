// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
// var planTrip = function ( linea , start, lineb, finish) {

// }
// var lineN = new lineN['timessquare', '34th', '28th', '23rd', 'unionsquare', '8th' ];
// var lineL = new lineL['8thL', '6th', 'unionsquareL', '3rd','1st'];
// var line6 = new line6['grandcentral', '33rd', '28th6', '23rd','unionsquare6', 'astorplace'];
// var mtaNetwork = new mtaNetwork[ lineN , lineL, line6 ];

var lineN = ['timessquare', '34th', '28th', '23rd', 'unionsquare', '8th' ];
var lineL = ['8thL', '6th', 'unionsquareL', '3rd','1st'];
var line6 = ['grandcentral', '33rd', '28th6', '23rd6','unionsquare6', 'astorplace'];
var mtaNetwork = lineN.concat(lineL, line6)

var planTrip = function (startstation, endstation ){
  for (var i = 0; i < mtaNetwork.length; i++) {
   var travel = mtaNetwork[i] ;
    if (travel === startstation && endstation ){
    console.log("we made it to " + endstation + " from "+ startstation + " we have moved "+ (mtaNetwork.indexOf(endstation) - (mtaNetwork.indexOf(startstation))) + " spots")
   } else {
    ("we didnt make it")
  }
  };
}

// var planTrip = function (lineA, lineB) {
//   for (var i = 0; i < lineN.length; i++) {
//     var travel = lineN[i];
//     if (lineN[i] === lineA && lineB) {
//       console.log("we made it to " + lineB+ " from "+ lineA + " we have moved "+ (lineN.indexOf(lineB) - (lineN.indexOf(lineA))) + " spots")
//     // } else if (lineN[i] !== lineA && lineB){
//     //   for (var i = 0; i < lineL.length; i++) {
//     //     lineL[i]
//     //       var travel2 = LineL[i];
//     //       if (lineL[i]= lineA||lineB){
//     //         console.log("we made it to"+ lineB + " from " + lineA + " We switched stations at union square!")

//           // }
        

        
//       // };
//     }

//   };
// }
  



















