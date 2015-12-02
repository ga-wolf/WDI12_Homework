require 'pry'
def lines
  {
    :N  => %w( times\ square 34th 28th 23rd union\ square 8th ),
    :L  => %w( 8th 6th union\ square 3rd 1st ),
    :S => %w( grand\ central 33rd 28th 23rd union\ square astor\ place )
  }
end

# finds all stops from first_stop to last_stop on a single line. excludes first_stop
def get_stops (line, first_stop, last_stop)
  # puts "line #{ line } stop #{ first_stop } -> stop #{ last_stop }"
  first_index = lines[line.to_sym].index(first_stop)
  last_index = lines[line.to_sym].index(last_stop)
  if first_index <= last_index
    trip = lines[line.to_sym][first_index..last_index]
  else
    trip = lines[line.to_sym][last_index..first_index].reverse
  end
  trip.shift # remove first stop
  return trip
end

def get_trip (first_line, first_stop, last_line, last_stop)
  if (first_stop == 'union square' && last_stop == 'union square') ||
    (first_stop == last_stop && first_line == last_line)
    puts "You don't need a train"
  elsif first_line == last_line || first_stop == 'union square' || last_stop == 'union square'# single line trip
    line = lines[first_line.to_sym]
    if line.include?(first_stop) && line.include?(last_stop) # picks the first line as it has first and last stop
      trip = get_stops(first_line, first_stop, last_stop)
    else # picks the last line as it has both first and last stop
      trip = get_stops(last_line, first_stop, last_stop)
    end
    puts "There are #{ trip.length } stops. Your trip includes: #{ trip.join(', ') }"
  else # 2 line trip
    tripA = get_stops(first_line, first_stop, 'union square')
    tripA.pop
    tripB = get_stops(last_line, 'union square', last_stop)
    tripAll = tripA + tripB
    puts "There are #{ tripAll.length + 1 } stops."
    puts "On line #{ first_line }, your trip includes: #{ tripA.join(', ') }." if !tripA.empty?
    puts "Change at Union Square to line #{ last_line }, your trip includes: #{ tripB.join(', ') }"
  end
end

def prompt
  print "Enter line: "
  first_line = gets.chomp.strip.upcase
  print "Enter stop: "
  first_stop = gets.chomp.strip.downcase
  print "Enter destination line: "
  last_line = gets.chomp.strip.upcase
  print "Enter destination stop: "
  last_stop = gets.chomp.strip.downcase
  get_trip(first_line, first_stop, last_line, last_stop)
end

prompt