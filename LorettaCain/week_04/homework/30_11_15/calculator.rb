# Calculator
# Explanation

# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:

# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1

# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2

# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3

# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality







# Prompt the user with some message and return the result.
def prompt(message)
  print message
  gets.chomp
end

# Prompt the user with a menu of supported operations and return the downcase version of the user's choice.
def menu
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiply"
  puts "(d) - divide"
  puts "(sq) - square root"
  puts "(ex) - exponent"
  puts "(q) - quit"
  prompt('Enter your choice: ').downcase
end


# Prompt for and add two numbers together, returning the result.
def add
  # puts prompt('First number: ').to_f + prompt('Second number: ').to_f
  a = prompt('First number: ').to_f
  b = prompt('Second number: ').to_f

  result = a + b
  
  puts result
  
  result # Implicit return of the result in case you wanted to use it elsewhere.
end


#Prompt for and subtract two numbers together, returning the result.
def sub
  # puts prompt ('First number: ').to_f - prompt('Minus second number: ').to_f
  a = prompt('First number: ').to_f
  b = prompt('Minus second number: ').to_f

  result = a - b

  puts result

  result # Implicit return of the result in case you wanted to use it elsewhere. 
end


#Prompt for and multiply two numbers together, returing the result.
def multiply
  # puts prompt ('First number: ').to_f * prompt('Multiplied by second number: ').to_f
  a = prompt('First number: ').to_f
  b = prompt('Multiplied by second number: ').to_f

  result = a * b

  puts result

  result # Implicit return of the result in case you wanted to use it elsewhere. 
end


#Prompt for and divide two numbers together, returing the result.
def divide
  # puts prompt ('First number: ').to_f / prompt('Divided by second number: ').to_f
  a = prompt('First number: ').to_f
  b = prompt('Divided by second number: ').to_f

  result = a / b

  puts result

  result # Implicit return of the result in case you wanted to use it elsewhere. 
end


#Prompt for and square a number, returing the result.
def square
  # puts prompt ('Enter a number to square: ').to_f 
  a = prompt('Square root of this number: ').to_f

  result = Math.sqrt(a)

  puts result

  result # Implicit return of the result in case you wanted to use it elsewhere. 
end


#Prompt for and calculate an exponent of a number.
def exponent
  # puts prompt ('Number: ').to_f ** prompt('Exponent: ').to_f
  a = prompt('Number: ').to_f
  b = prompt('Exponent: ').to_f

  result = a**b

  puts result

  result # Implicit return of the result in case you wanted to use it elsewhere. 
end



# Get the user's initial choice.
choice = menu()

# Keep looping until the user quits.
until choice == 'q'

  # Handle the user's choice by dispatching to the appropriate function.
  case choice
  when 'a'
    add()
  when 's'
    sub()
  when 'm'
    multiply()
  when 'd'
    divide()
  when 'sq'
    square()
  when 'ex'
    exponent()
  else
    puts "Invalid selection, dingus."
  end

  # Prompt the user for another operation and keep going.
  choice = menu()
end

puts "Thank you for using this crappy calculator. Send $$$."