# Activity:

# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# Hints:

# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
require 'pry'


def lines 
  {
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    :'6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

puts "Enter your starting line: "
sl = gets.chomp.to_sym
linestart = lines[sl]


puts "Enter your starting station: "
ss = gets.chomp
stationstart = linestart.index(ss)

puts "Enter your final line: "
fl = gets.chomp.to_sym
lineend = lines[fl]


puts "Enter your final station: "
fs = gets.chomp
stationend = lineend.index(fs)


def sameline(linestart, lineend, stationstart, stationend)
  if linestart == lineend
    printstops(linestart, stationstart, stationend)
  else 
    puts "Your journey begins here: "
    puts log_to_union(linestart, stationstart)
    count = log_to_union(linestart, stationstart).count
    puts "Change at Union Square to continue your journey: "
    puts log_from_union(lineend, stationend)
    count2 = log_from_union(lineend, stationend).count
    count3 = count + count2 - 1
    puts "Your total number of stops: #{count3}"
  end
end

def printstops(line, stationstart, stationend) 
  if stationend > stationstart
  puts "Your journey begins here: "
  puts line[stationstart..stationend]
  count = line[stationstart..stationend].count
  puts "Your total number of stops for this trip is: #{count}" 
elsif stationend < stationstart
  puts line[stationend..stationstart].reverse
  count2 = line[stationend..stationstart].reverse.count
  puts "Your total number of stops for this trip is: #{count2}" 
  end
end


def log_to_union(line, stationstart)
  if stationstart < line.index("Union Square")
    line[stationstart..line.index("Union Square")]
  elsif stationstart > line.index("Union Square")
    line[line.index("Union Square")..stationstart].reverse
  end
end

def log_from_union(line, stationend)
  if stationend < line.index("Union Square")
  line[stationend..line.index("Union Square")].reverse
  elsif stationend > line.index("Union Square")
  line[line.index("Union Square")..stationend]
  end
end



sameline(linestart, lineend, stationstart, stationend)

# binding.pry


# prints the total number of stops for the trip.



#I want my prompts to be in a variable so

# sl = prompt("Enter your starting line: ")
# ss = prompt("Enter your starting station: ")

# plan_trip(N, 23, '6', Astor Place)