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

def prompt(message)
  print message
  gets.chomp
end

def menu
  puts "(a) - add"
  puts "(s) - subtract"
  puts "(m) - multiply"
  puts "(d) - division"
  puts "(e) - exponent"
  puts "(r) - square root"
  puts "(q) - quit"
  prompt("enter your choice: ").downcase
end

def calculate(operator)
  puts case operator
    when 'a'
      prompt('first number: ').to_f + prompt('second number: ').to_f
    when 's'
      prompt('first number: ').to_f - prompt('second number: ').to_f
    when 'm'
      prompt('first number: ').to_f * prompt('second number: ').to_f
    when 'd'
      prompt('first number: ').to_f / prompt('second number: ').to_f
    when 'e'
      prompt('first number: ').to_f ** prompt('second number: ').to_f
    when 'r'
      Math.sqrt(prompt('first number: ').to_f)
  end
end

choice = menu()
puts "You entered #{ choice }"

until choice == 'q'
  case choice
    when 'a'
      calculate('a')
    when 's'
      calculate('s')
    when 'm'
      calculate('m')
    when 'd'
      calculate('d')
    when 'e'
      calculate('e')
    when 'r'
      calculate('r')
    else
      puts "invalid selection"
  end
  choice = menu()
end

puts "Thanks for nothing"