class Calculator
  def ask( question )
    result = question.match( /What is (-?\d+) plus (-?\d+)?/ )
    result[1].to_i + result[2].to_i
  end
end