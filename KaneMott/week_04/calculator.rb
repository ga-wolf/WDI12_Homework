
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


#------------------------------------------------------------------------------------

def prompt(message)
	print message
	gets.chomp
end

def menu
	puts "(a) - addition"
	puts "(s) - subtraction"
	puts "(m) - multiplication"
	puts "(d) - division"
	puts "(q) - quit"
	puts "(sq) - square root"
	puts "(ex) - exponents"
	prompt("Enter your choice: ").downcase
end

#------------------------------------------------------------------------------------

# def add
# 	puts prompt('First number: '.to_f + prompt("Second number:").to_f)

# end

def add
	# x + y
	a = prompt('First number: ').to_f 
	b = prompt("Second number: ").to_f

	result = a+b
	puts result

	result

end

def subtract
	# x - y
	a = prompt('First number: ').to_f 
	b = prompt("Second number: ").to_f

	result = a-b
	puts result

	result
	
end

def multiply
	# x * y
	a = prompt('First number: ').to_f 
	b = prompt("Second number: ").to_f

	result = a*b
	puts result

	result
	
end

def divide
	# x / y
	a = prompt('First number: ').to_f 
	b = prompt("Second number: ").to_f

	result = a/b
	puts result

	result
	
end

def square_rt
	# sqrt(x)
	a = prompt('Square root of: ').to_f 

	result = Math.sqrt(a)
	puts result

	result
	
end

def ex
	# x ** y
	a = prompt('First number: ').to_f 
	b = prompt("Second number: ").to_f

	result = a**b
	puts result

	result
	
end

#------------------------------------------------------------------------------------

choice = menu()

until choice == 'q'
	puts "Doing some calculation"
	case choice
	when 'a'
	add()
	when 's'
	subtract()
	when 'm'
	multiply()
	when 'd'
	divide()
	when 'sq'
	square_rt
	when 'ex'
	ex()
	else
	puts "Invalid selection"
end
choice = menu()
end



puts "l8z"