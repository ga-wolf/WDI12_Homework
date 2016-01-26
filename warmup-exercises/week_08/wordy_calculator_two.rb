# What is 5 plus 13?
# What is 7 minus 5?
# What is -6 multiplied by 4?
# What is 25 divided by -5?

class Calculator
  def ask( question )
    res = question.match( /What is (-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)?/ )
    # res = question.match( /What is (-?\d+) (\w+.*) (-?\d+)?/ )

    case res[2]
      when "plus" then res[1].to_i + res[3].to_i
      when "minus" then res[1].to_i - res[3].to_i
      when "divided by" then res[1].to_i / res[3].to_i
      when "multiplied by" then res[1].to_i * res[3].to_i
    end

  end
end

calc = Calculator.new
puts calc.ask("What is 5 plus 13?")
puts calc.ask("What is 7 divided by 5?")
puts calc.ask("What is -7 minus 5?")
puts calc.ask("What is -7 multiplied by 5?")