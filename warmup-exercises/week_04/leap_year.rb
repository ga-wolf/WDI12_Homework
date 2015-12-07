require 'pry'

# def is_leap_year? year
#   if year % 4 == 0 && ( year % 100 != 0 || year % 400 == 0 )
#     true
#   else
#     false
#   end
# end

def is_leap_year? year
  unless year % 4 != 0 && ( year % 100 == 0 && year % 4 != 0 )
    puts "A leap year"
    true
  else
    false
  end
end

is_leap_year? 1900
is_leap_year? 2000