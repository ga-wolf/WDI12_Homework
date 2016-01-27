class MagicController < ApplicationController

  def question
  end

  def answer
    i = Random.rand
    if i <= 0.10 
      @answer = "The outlook is grim."
    elsif i <= 0.20
      @answer = "Yes."
    elsif i <= 0.30
      @answer = "No."
    elsif i <= 0.40
      @answer = "I'm uncertain. Try again."
    elsif i <= 0.50
      @answer = "Don't ask me that."
    elsif i <= 0.60 
      @answer = "Probably."
    elsif i <= 0.70
      @answer = "You ask too many questions."
    elsif i <= 0.80
      @answer = "Definitely yes."
    elsif i <= 0.90 
      @answer = "Leave me alone."
    else 
      @answer = "Too many options.."
    end
  end
end