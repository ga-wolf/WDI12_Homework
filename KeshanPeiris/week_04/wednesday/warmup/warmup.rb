# // Sum of Squares and Squares of Sums
# // The sum of the squares of the first ten natural numbers is,

# // 1**2 + 2**2 + ... + 10**2 = 385

# // The square of the sum of the first ten natural numbers is,

# // (1 + 2 + ... + 10)**2 = 55**2 = 3025

# // Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

# // Make it so that it doesn't just work for the number 10.

# num1 = gets.chomp.to_i
# num2 = gets.chomp.to_i

# def sum_of_squares (value)
#   puts num1 num2
# end


system "clear"
def menu 
  puts " *******************************"
  puts "| KESHANS PROGRAMINATION STATION |"
  puts " *******************************"
  puts "1 . Sum of squares"
  puts "2 . Square of sums"
  print "Please select a number!"
  user_choice = gets.chomp
  user_choice
end

user_choice = menu

if user_choice == '1'
  puts "Please put first number"
  num1 = gets.to_i
  puts "Please put second number"
  num2 = gets.to_i
  arraytotal = Array(num1..num2).map {|num| num ** 2}
  arraytotal2 = arraytotal.inject(:+)
  puts "The total is #{arraytotal2}"
  puts "*****************"
  puts "Thankyou for using my machine"
  
end

if user_choice == '2'
  puts "Please put first number"
  num1 = gets.to_i
  puts "Please put second number"
  num2 = gets.to_i
  arraytotal = Array(num1..num2).inject(:+)
  arraysum = arraytotal ** 2
  puts "The total is #{arraysum}"
  puts "*****************"
  puts "Thankyou for using my machine!"
end






