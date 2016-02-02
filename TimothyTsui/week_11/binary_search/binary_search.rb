require 'pry'

# hi - index of last element
# lo - index of first element
def binarySearch array, targetNum, hi = nil, lo = nil
  hi = array.length - 1 if hi.nil?
  lo = 0 if lo.nil?
  # puts "arr #{array} hi #{hi} lo #{lo}"
  mid = ( ( hi - lo ) / 2 ) + lo # index of middle element
  if array[mid] == targetNum
    mid
  elsif lo >= hi # > is when [1,3,5,7] and targetNum = 4
    -1 # targetNum not in array
  elsif array[mid] > targetNum
    hi = mid - 1
    binarySearch array, targetNum, hi, lo
  elsif array[mid] < targetNum
    lo = mid + 1
    binarySearch array, targetNum, hi, lo
  end
end