class Triangle
  def initialize(a, b, c)
    @a, @b, @c = [a, b, c].sort
    @type = determine_type()
    puts @type
  end

  def determine_type
    return :invalid if @a <= 0 || @a + @b < @c
    return :equilateral if @a == @c
    return :isosceles if @a == @b || @b == @c
    :scalene
  end
end

tri1 = Triangle.new( 4, 100, 2 )
