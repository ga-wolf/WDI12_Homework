def prompt(message)
    print message
    gets.chomp
end

def menu
    puts "a: addition"
    puts "s: subtraction"
    puts "m: multiplication"
    puts "d: division"
    puts "e: exponent"
    puts "r: square root"
    puts "q: quit"
    prompt("Enter your choice: ").downcase
end

def add
    puts "####################################################################
#{puts prompt("First number: ").to_f + prompt("Added to: ").to_f}
####################################################################"  
end

def subtract
    puts "####################################################################
#{ prompt("First number: ").to_f - prompt("Subtracted by: ").to_f }
####################################################################"  
end

def multiply
    puts "####################################################################
#{ puts prompt("Number: ").to_f * prompt("Multiplied by: ").to_f }
####################################################################"   
end

def divide
    puts "####################################################################
#{ prompt("Number: ").to_f / prompt("Divided by: ").to_f }
####################################################################"
end

def exponent
    puts "####################################################################
Equals: #{ prompt("Number: ").to_f ** num2 = prompt("To the power of: ").to_f }
####################################################################"
end

def squareroot
    num = prompt("Number: ").to_f
    num2 = prompt("To the root of: ").to_f
    puts "####################################################################"
    puts ( num**(1/num2) )
    puts "####################################################################"
end

choice = menu()

until choice == "q"
    puts "####################################################################"
    puts "Doing some calculation"

    case choice
    when "a"
        add()
    when "s"
        subtract()
    when "m"
        multiply()
    when "d"
        divide()
    when "e"
        exponent()
    when "r"
        squareroot()
    else
        puts "Invalid selection"
    end

    choice = menu()
end

puts "Thank you for using this crappy calculator"