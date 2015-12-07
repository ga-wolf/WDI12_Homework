require 'pry'
# 10.downto(1) { |i| puts i }
# puts "Blastoff!"

def sum_of_squares( num = 10 )
  result = 0
  1.upto( num ) { |i| result += ( i ** 2 ) }
  result

  # (1..num).reduce(0) { |sum, current| sum += current ** 2 }
  # (1..10).to_a.each { |i| result += ( i ** 2 ) }
  (1..10).to_a.each do |i|
    result += ( i ** 2 )
  end
end

sum_of_squares( 10 )

def square_of_sums( num )
  # Have an array of numbers, and reduce them by all together
  result = 0
  1.upto( num ) { |i| result += i }
  result ** 2
  # puts result ** 2

  # puts (1..num).to_a.reduce(0) { |sum, current_num| sum += current_num }
  # (1..num).to_a.reduce(0) { |sum, current_num| sum += current_num }
  # (1..num).reduce(0) { |sum, current_num| sum += current_num }
  # (1..num).reduce { |sum, current_num| sum *= current_num }
  # (1..num).reduce( 0, :+ )
  # (1..num).inject( 0, :* )
  # (1..num).inject( :+ ) ** 2
end

def difference_of_squares( num )
  puts (square_of_sums( num ) - sum_of_squares( num )).abs
end

difference_of_squares( 10 )

# square_of_sums( 10 )
# binding.pry

# sum_of_squares()