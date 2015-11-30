#MENU LAYOUT
def menu
  puts "(1) Addition"
  puts "(2). Division"
  puts "(3). Subtraction"
  puts "(4). Multiplication"
  puts "(5). Exponential"
  puts "(q). Quit"
  print "Please select a number!"
end

#DECIDING WHAT TO DO
def selection_read
  menu
  user_descision = gets.chomp
  puts "you have decided #{user_descision}"
  user_descision
end

user_descision = selection_read

#ADDITION
if user_descision =='1'
  puts "Please enter first intergral"
  addnum1 = gets.to_i
  puts "Please enter second intergral"
  addnum2 = gets.to_i
  addition = addnum1 + addnum2
  puts "Your result is #{addition}"
end

#DIVISION
if user_descision == '2'
  puts "Please enter first intergral"
  divnum1 = gets.to_i
  puts "Please enter second intergral"
  divnum2 = gets.to_i
  division = divnum1/divnum2
  puts "Your result is #{division}"
end

#SUBTRACTION 
if user_descision == '3'
  puts "Please enter first intergral"
  subnum1 = gets.to_i
  puts "Please enter second intergral"
  subnum2 = gets.to_i
  subtraction = subnum1 - subnum2
  puts "Your result is #{subtraction}"
end

#MULTIPLICATION
if user_descision == '4'
  puts "Please enter first intergral"
  multinum1 = gets.to_i
  puts "Please enter second intergral"
  multinum2 = gets.to_i
  multiplication = multinum1 * multinum2
  puts "Your result is #{multiplication}" 
end

#EXPONENTIAL
if user_descision == '5'
  puts "Please enter first intergral"
  exponent1 = gets.to_i
  puts "Please enter second intergral"
  exponent2 = gets.to_i
  exponential = exponent1 ** exponent2
  puts "Your result is #{exponential}"
end