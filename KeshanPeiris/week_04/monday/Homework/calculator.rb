def menu
  puts "1. Add"
  puts "2. Divide"
  puts "3. Subtract"
  puts "4. Multiply"
  puts "m. Menu"
  puts "q. Quit"
  print "Enter your selection: "
end

menu

def read_choice
  user_choice = gets.chomp.to_s
  puts "You have selected #{user_choice}"
  user_choice
end

read_choice

def read_number
  puts "Enter first number: "
  num1 = gets.to_i
  puts "Enter second number: "
  num2 = gets.to_i
  return num1, num2
end

def add
  num1, num2 = read_number
  sum = num1 + num2
  puts "You have entered #{num1} + #{num2}"
  puts "The sum is #{sum}"
  
end

add

def divide
  num1, num2 = read_number
  divide = num1 / num2
  puts "You have entered #{num1} / #{num2}"
  puts "The answer is #{divide}"
 
end

divide

def subtract
  num1, num2 = read_number
  minus = num1 - num2
  puts "You have entered #{num1} - #{num2}"
  puts "The sum is #{minus}"
  
end

subtract

def multiply
  num1, num2 = read_number
  times = num1 * num2
  puts "You have entered #{num1} * #{num2}"
  puts "The sum is #{times}"

end

multiply


# if read_number == '1'
#   puts "The result is #{sum}"
# elsif read_number == '2'
#   puts "The result is #{divide}"
# elsif read_number == '3'
#   puts "The result is #{minus}"
# elsif read_number == '4'
#   puts "The result is #{multiply}"
# elsif read_number == 'q'
#   puts "fek off"
# else
#   puts "GTFO"
# end

# menu

           
    
    
    


until read_choice == 'q'
  case read_choice
  when '1'
    sum 
  when '2'
    divide
  when '3' 
    minus
  when '4' 
    multiply
  when 'm' 
    puts "Return to menu"
  else
    puts "I don't understand your selection"
  end
end

