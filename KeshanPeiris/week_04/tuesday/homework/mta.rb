class MtaSingle
  attr_accessor :line, :departure_station, :destination_station

  LINES = {
    'n' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'l' => ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6' => ['Grand Central', '33rd', '28th', 'Union Square', 'Astor Place']
  }

  def number_of_stations
    (stations.index(destination_station) - stations.index(departure_station)).abs
  end

  def stations
    LINES[line]
  end
end

mta = MtaSingle.new

puts "Enter the line (#{MtaSingle::LINES.keys.join(', ')}): "
mta.line = gets.chomp
puts "Enter the departure station (#{mta.stations.join(', ')}) : "
mta.departure_station = gets.chomp
puts "Enter the destination station (#{mta.stations.join(', ')}) : "
mta.destination_station = gets.chomp

puts "total number of stations: #{mta.number_of_stations}"