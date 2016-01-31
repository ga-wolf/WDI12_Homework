require 'pry'
class WordProblem
  def initialize(question)
    @question = question
  end

  def answer
    @answer = case matches[2]
    when "plus" then matches[1].to_i + matches[3].to_i
    when "minus" then matches[1].to_i - matches[3].to_i
    end

    if chain?
      case matches[5]
      when "plus" then @answer += matches[6].to_i
      when "minus" then @answer -= matches[6].to_i
      end
    end

    @answer
  end

  def matches
    @question.match( /What is (-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/ )
  end

  def chain?
    !!matches[4]
  end
end


#
# What is 1 plus 1 plus 1?
# What is (-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?
