class NumberguessController < ApplicationController
  def home
  end

  def check
    @num = randomNum
    @guess = params[:guess].to_i
    if @num == @guess
      @response = "Congratulations on guessing the number"
    elsif @guess < @num
      @response = "Try guessing higher next time"
    elsif @guess > @num 
      @response = "Try guessing lower next time"
    end
  end

  def guessagain
  end
end

def randomNum
  (1..1000).to_a.sample
end