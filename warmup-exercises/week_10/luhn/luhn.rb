class Luhn
  # Return a Luhn number with a valid checksum.
  def self.create(n)
    candidate = n * 10
    luhn = Luhn.new candidate
    return candidate if luhn.valid?
    candidate + 10 - (luhn.checksum % 10) # Figure out the necessary checksum.
  end

  def initialize(n)
    @number = n
  end

  def check_digit
    # @number.to_s.chars.last.to_i # The arithmetic version is a little neater.
    @number % 10
  end

  def addends
    @number.to_s.chars.reverse.each_with_index.map do |d, i|
      if i.even?
        d.to_i # Return the digits at even indexes unchanged.
      else
        # Transform the digit by doubling it (and maybe subtracting 9).
        td = d.to_i * 2
        td -= 9 if td > 9 # "Reduce" the doubled digit back to a single digit.
        td
      end
    end.reverse # You can chain on the end keyword!
  end

  def checksum
    addends.inject :+
  end

  def valid?
    checksum % 10 == 0
  end
end
