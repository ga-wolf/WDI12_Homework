def prompt(message)
  print message
  gets.chomp
end

def menu
  puts "q - quit"
  puts "a - addition"
  puts "s - subtraction"
  puts "m - multiplication"
  puts "d - division"
  puts "p - to the power of"
  puts "r - square root of"
  prompt('enter your choice: ')
end

choice = menu

def add
  prompt('First number: ').to_f + prompt('Second number: ').to_f
end

def subtract
  prompt('First number: ').to_f - prompt('Second number: ').to_f
end

def multiply
  prompt('First number: ').to_f * prompt('Second number: ').to_f
end

def divide
  prompt('Full number: ').to_f / prompt('Divided by: ').to_f
end

def power_of
  prompt('Base number: ').to_f ** prompt('to the power of: ').to_f
end

def root_of
  prompt('Base number: ').to_f ** ( prompt('nth root: ').to_f ** -1 )
end

until choice == 'q'
  case choice
  when 'a'
    puts add()
  when 's'
    puts subtract()
  when 'm'
    puts multiply()
  when 'd'
    puts divide()
  when 'p'
    puts power_of()
  when 'r'
    puts root_of()
  else
    puts "invalid selection"
  end
  choice = menu()
end

puts "Thanks for nothing, boyo."