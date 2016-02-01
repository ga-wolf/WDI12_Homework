require 'pry'
class WordProblem
  attr_accessor :question
  def initialize( question )
    @question = question
  end

  def answer
    @matches = @question.match pattern

    if @matches.nil?
      raise ArgumentError.new "I don't understand this question"
    end

    @result = @matches[1].to_i.send( operation(2), @matches[3].to_i )

    if chain?
      @result = @result.send(operation(5), @matches[6].to_i)
    end

    @result
  end

  def pattern
    operations = "(plus|minus|multiplied by|divided by)"
    /What is (-?\d+) #{operations} (-?\d+)( #{operations} (-?\d+))?\?/
  end

  def operation num
    case @matches[num]
    when "plus" then :+
    when "minus" then :-
    when "multiplied by" then :*
    when "divided by" then :/
    end
  end

  def chain?
    !!@matches[4]
  end
end
