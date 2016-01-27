class NumberController < ApplicationController

  def guess
  end

  def answer
    @computer_Number = Random.rand(1...10)
    @human_guess = params[:human_guess].to_f

    if @computer_Number == @human_guess
      @answer = "You guessed correctly!"
    else 
      @answer = "Try again."
    end 
  end

end

