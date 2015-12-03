
# MTA Lab
# Objectives:

# Apply your knowledge of Javascript to solve a real world problem.
# Get really good at array manipulation.
# Activity

# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

# // console.log() shows output similar to this:
# // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:

# Work out how you would do it on paper first! Then start to explain that process in Javascript.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: indexOf())
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



# given start: line L, station 34th
# given destination: line six, station Grand Central

# find index of 34th
# calculate stops between 34th and union square
# find index of Grand Central
# calculate stops between Union Square and Grand Central

require "pry"
require "rainbow"

subway_lines = {
    :N => %w{ Times\ Square 34th 28th\ n 23rd\ n Union\ Square 8th\ n },
    :L => %w{ 8th\ l 6th Union\ Square 3rd 1st },
    :"6" => %w{ Grand\ Central 33rd 28th\ 6 23rd\ 6 Union\ Square Astor\ Place }
}

count = 0

# Function to print each station in the trip
def print_stations subway_lines, line, startIndex, destinationIndex, num, count

    startIndex += num # This line simply makes sure that we omit printing the first/starting station

    # If the start comes before the destination in the array, then create a new line_array with elements in the same order
    line_array = subway_lines[line][startIndex..destinationIndex]

    #If the start comes after the destination in the array, then create a new line_array with elements in reversed order
    line_array = subway_lines[line][destinationIndex..startIndex].reverse if startIndex > destinationIndex
    line_array.each do |station|
        if station != line_array.last
            print "#{station}, "
        else
            print "#{station}.\n"
        end
        count += 1;
    end

    count

end

# Function to calculat trips that start and end on different lines
def print_trip subway_lines, line, start, destination, count

    startIndex = subway_lines[line].index start
    destinationIndex = subway_lines[line].index destination

    if startIndex < destinationIndex
        count = print_stations subway_lines, line, startIndex, destinationIndex, 1, count
    else
        count = print_stations subway_lines, line, startIndex, destinationIndex, -1, count
    end

    count
end

# Function to calculate trips that start and end on the same line
def print_single_line_trip subway_lines, line, start, destination, count

    startIndex = subway_lines[line].index start
    destinationIndex = subway_lines[line].index destination

    if startIndex < destinationIndex
        count = print_stations subway_lines, line, startIndex, destinationIndex, 1, count
    else
        count = print_stations subway_lines, line, startIndex, destinationIndex, -1, count
    end

    count
end

# Main function to plan trips
def plan_trip subway_lines, station1, line1, station2, line2, count
    if line1 != line2

        print "You must travel through the following stops on the #{line1} line: "

        count = print_trip subway_lines, line1, station1, "Union Square", count

        print "Change at Union Square.\n"

        print "Your journey continues through the following stops on the #{line2} line: "

        count = print_trip subway_lines, line2, "Union Square", station2, count

    else
        print "You must travel through the following stops on the #{line1} line: "
        count = print_single_line_trip subway_lines, line1, station1, station2, count
    end

    puts "#{count} stops in total."

end

def prompt(message)
    print message
    gets.chomp
end

system "sl"
puts Rainbow("                   
                      (+++++++++++)
                  (++++)
               (+++)
             (+++)
            (++)
            [~]
            | | (~)  (~)  (~)    /~~~~~~~~~~~~
         /~~~~~~~~~~~~~~~~~~~~~~~  [~_~_] |    * * * /~~~~~~~~~~~|
       [|  %___________________           | |~~~~~~~~            |
        \\[___] ___   ___   ___\\           | |                    |
      /// [___+/-+-\\-/-+-\\-/-+ \\\\_________|=|____________________|
    //// @-=-@ \\___/ \\___/ \\___/  @-==-@      @-==-@      @-==-@
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~").cyan

system "cowsay -f dragon-and-cow 'Welcome to the crappiest trip planner on earth' | lolcat"

station1 = "w"

line1 = prompt("\nWhich line are you travelling from?: ").to_sym
station1 = prompt("Which station are you travelling from?: ")

line2 = prompt("\nWhich line are you travelling to?: ").to_sym
station2 = prompt("Which station are you travelling to?: ")


until line1 == :q || station1 == "q" || line2 == :q || station2 == "q"
    plan_trip subway_lines, station1, line1, station2, line2, count

    line1 = prompt("\nWhich line are you travelling from?: ").to_sym
    station1 = prompt("Which station are you travelling from?: ")

    line2 = prompt("\nWhich line are you travelling to?: ").to_sym
    station2 = prompt("Which station are you travelling to?: ")

end

# plan_trip subway_lines, "33rd", :"6", "8th l", :L

#binding.pry
#puts
