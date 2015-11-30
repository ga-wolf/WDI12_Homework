def prompt(message)
  print message
  gets.chomp
end

# choice = prompt("Please enter your choice: ")

# puts "You entered #{ choice }."

def menu
  puts "(a) - addition"
  puts "(q) - quit"
  prompt('Enter your choice: ').downcase
end

def add
  puts prompt('First number: ').to_f + prompt('Second number: ').to_f
end

choice = menu()

# puts "Your choice was: #{ choice }"

# until choice == 'q'
#   puts "Doing some calculation"
#   case choice
#   when 'a'
#     add()
#   when 's'
#     subtract()
#   end
# end


until choice == 'q'
 
 case choice 
 when 'a'
  add()
else
  puts "Invalid selection"
end

  choice = menu()
end

puts "Thanks for using this crappy calculator!"
