system ("clear")
def menu
  puts "1. Add"
  puts "2. Divide"
  puts "3. Subtract"
  puts "4. Multiply"
  # puts "m. Menu"
  puts "q. Quit"
  print "Enter your selection please: "
end

def read_selection
  menu
  user_choice = gets.chomp
  puts "You have selected #{user_choice}"
  user_choice
end

user_choice = read_selection

if user_choice == '1'
  puts "Please enter first number"
  add1 = gets.to_i
  puts "Please enter second number"
  add2 = gets.to_i
  add = add1 + add2
  puts "Your answer is #{add}"
end

if user_choice == '2'
  puts "Please enter first number"
  divide1 = gets.to_i
  puts "Please enter second number"
  divide2 = gets.to_i
  divide = divide1 / divide2
  puts "Your answer is #{divide}"
end

if user_choice == '3'
  puts "Please enter first number"
  minus1 = gets.to_i
  puts "Please enter second number"
  minus2 = gets.to_i
  minus = minus1 - minus2
  puts "Your answer is #{minus}"
end

if user_choice == '4'
  puts "Please enter first number"
  times1 = gets.to_i
  puts "Please enter second number"
  times2 = gets.to_i
  times = times1 * times2
  puts "Your answer is #{times}"
end