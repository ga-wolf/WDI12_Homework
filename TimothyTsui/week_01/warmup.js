// Pling Plang Plong
// Write a program that converts a number to a string per the following rules:

// If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

// If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

// E.g.

// The prime factors of 28 are [2, 2, 7].

// # => "Plong"
// The prime factors of 1755 are [3, 3, 3, 5, 13].

// # => "PlingPlang"
// The prime factors of 34 are [2, 17].

// # => "34"

var factors = [];
var ppp = function(num){
  if (num == 1)
    return;
  if (num % 2 === 0){
    ppp(num / 2);
    factors.push(2);
  }else if (num % 3 === 0){
    ppp(num / 3);
    factors.push(3);
  }else if (num % 7 === 0){
    ppp(num / 7);
    factors.push(7);
  }else if (num % 5 === 0){
    ppp(num / 5);
    factors.push(5);
  }else{
    for (var i=11; i <= num; i++){
      if (isPrime(i) && num % i === 0){
        factors.push(i);
        ppp(num/i);
      }
    }
  }
}

var isPrime = function(num){
  for (var i=2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

ppp(1755);
console.log(factors);