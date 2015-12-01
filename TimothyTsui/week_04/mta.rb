require 'pry'
def lines
  {
    :N  => %w( Times\ Square 34th 28th 23rd Union\ Square 8th ),
    :L  => %w( 8th 6th Union\ Square 3rd 1st ),
    :S => %w( Grand\ Central 33rd 28th 23rd Union\ Square Astor\ Place )
  }
end

# finds stops and count them on a single line
def get_stops (line, first_stop, last_stop)

  puts "line #{ line } stop #{ first_stop } -> stop #{ last_stop }"
  first_index = lines[line.to_sym].index(first_stop)
  last_index = lines[line.to_sym].index(last_stop)
  puts "#{ first_index } to #{ last_index }"
  if first_index <= last_index
    trip = lines[line.to_sym][first_index..last_index]
  else
    trip = lines[line.to_sym][last_index..first_index].reverse
  end
  # binding.pry
end


def mta (first_line, first_stop, last_line, last_stop)
  puts "line #{ first_line } stop #{ first_stop } -> line #{ last_line } stop #{ last_stop }"
  if first_line == last_line
    trip = get_stops(first_line, first_stop, last_stop)
    puts "There are #{ trip.length } stops. Your trip includes: #{ trip.join(', ') }"
  else
    tripA = get_stops(first_line, first_stop, 'Union Square')
    tripA.pop
    tripB = get_stops(last_line, 'Union Square', last_stop)
    tripB.shift
    tripAll = tripA | tripB
    puts "There are #{ tripAll.length + 1 } stops.
    On line #{ first_line }, your trip includes: #{ tripA.join(', ') }.
    Change at Union Square to line #{ last_line }, your trip includes: #{ tripB.join(', ') }"
  end
  binding.pry
end


binding.pry


