// 1. Write a function to reverse a string.
var reverseString = function(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  console.log(reversed);
  return reversed;
};

// 1b. Write a function to reverse an array
var reverseArray = function(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
  console.log(arr);
  return arr;
};

// 2. Write function to compute Nth fibonacci number:
var fib = function(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  var iterations = n - 2;
  var a = 1, b = 1;
  for (var i = 0; i < iterations; i++) {
    var tmp = a + b;
    a = b;
    b = tmp;
  }
  return b;
};

// 3. Print out the grade-school multiplication table up to 12x12
var timesTable = function() {
  for (var i = 0; i <= 12; i++) {
    var str = "";
    for (var j = 0; j <= 12; j++) {
      str = str + " " + pad(i * j, '   ');
    }
    console.log( str );
  }
};

// helper function that pads string with spaces so that timesTable is nicely formatted
var pad = function(str, padVal) {
  return String(padVal + str).slice(-padVal.length);
}

// 4. Write a function that sums up integers from a text file, one int per line.
var fileNode = document.getElementById('fileUpload');
fileNode.addEventListener('change', function() {

  var file = fileNode.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = e.target.result;
    var lines = data.split('\n');
    var sum1 = lines.reduce( function(sum, line) {
      var num = parseInt(line) || 0;
      return sum + num;
    }, 0);
    console.log('lines ' + lines.length, 'sum ' + sum1);
  };
  reader.readAsText(file);
});

// 5. Write function to print the odd numbers from 1 to 99.
var printOdd = function() {
  var nums = "";
  for (var i = 1; i < 100; i += 2) {
    nums = nums + i + " ";
  }
    console.log(nums);
}

// 6. Find the largest int value in an int array.
var maxInt = function(arr) {
  // method 1
  // return arr.reduce(function(max, num) {
  //   return max > num ? max : num;
  // });

  // method 2
  // if (arr.length === 0) { return NaN; }
  // var max = arr[0];
  // for (var i = 1; i < arr.length; i++){
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  // }
  // return max;

  // method 3
  return Math.max.apply(null, arr);
};

// 7. Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.
var rgb2hex = function(r, g, b) {
  var r2hex = r.toString(16);
  var g2hex = g.toString(16);
  var b2hex = b.toString(16);
  return pad(r2hex, "00") + pad(g2hex, "00") + pad(b2hex, "00");
};

array = "hello".split('');
console.log(array);
reverseArray(array);
reverseString("hello");

var fibSeq = "";
for (var i = 1; i < 10; i++){
  fibSeq = fibSeq + " " + fib(i);
}
console.log(fibSeq);

timesTable();

printOdd();

console.log(maxInt([10, 1, 3, 11, 2]));

console.log(rgb2hex(255,0,0));