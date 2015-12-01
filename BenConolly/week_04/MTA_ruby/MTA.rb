def lines
  { 
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    :Sixth => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

def change_at (line, station, station_array)
  shared_val = []
  station_array.each { |i| shared_val << lines[line].index(i) }
  closest_val = shared_val[0]
  shared_val.each do |i| 
    if ( lines[line].index(station) - i ).abs < closest_val
      closest_val = i
    end
  end
  change_station = lines[line][closest_val]
end

def journey_array (stop1, stop2, line)
  stop1 = lines[line].index(stop1)
  stop2 = lines[line].index(stop2)
  if stop1 < stop2
    part1 = lines[line][stop1..stop2]
  else
    reverse_line = lines[line].reverse
    part1 = reverse_line[-(stop1+1)..-(stop2+1)]
  end
end

def plan_trip (start_stop, start_line, end_stop, end_line)
  unless start_line == end_line
    shared = lines[start_line] & lines[end_line]
    change_station = change_at(start_line, start_stop, shared)
    part1 = journey_array(start_stop, change_station, start_line)
    part2 = journey_array(change_station, end_stop, end_line)
    journey = [part1, part2]
    p journey
    "First travel from #{ start_stop } to #{ part1.last }, and change to #{ end_line } line."
  else
    journey = journey_array(start_stop, end_stop, start_line)
    p journey
  end
end

require 'pry'
binding.pry

# def distance (line, station1, station2)
#   ( lines[line].index(station1) - lines[line].index(station2) ).abs
# end

# def shortest_journey (start_stop, start_line, end_stop, end_line)
#   shared = shared(start_line, end_line)
#   journey_lengths = []
#   shared.each |i| do
#     journey_lengths << ( distance(start_line, start_stop, i) + distance(end_line, i, end_stop) )
#   end
# end


# Next thing to do is to find how to get from one station to another, no lines
# I think it needs more brute forcing possibilities, sadly. Probably related to distance.