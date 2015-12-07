class RpsController < ApplicationController

  def guess
  end

  def result
   @human_guess = params[:human_guess].capitalize
    random_number = Random.rand(1...3)
    if random_number == 1
      @computer_guess = "Rock"
    elsif random_number == 2
      @computer_guess = "Paper"
    elsif random_number == 3
      @computer_guess = "Scissors" 
    end

    if @computer_guess == @human_guess
        @winner = "Tie."
    elsif @computer_guess == "Rock" && @human_guess == "Paper" || 
          @computer_guess == "Paper" && @human_guess == "Scissors" ||
          @computer_guess == "Scissors" && @human_guess == "Rock"
        @winner = "You win!"
    elsif
        @computer_guess == "Rock" && @human_guess == "Scissors" || 
        @computer_guess == "Paper" && @human_guess == "Rock" ||
        @computer_guess == "Scissors" && @human_guess == "Paper"
        @winner = "You lose!"
    end

  end
end