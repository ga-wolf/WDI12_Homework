class RpsController < ApplicationController
  def home
  end

  def winneris
    @playerchoice = params[:playerchoice]
    @compchoice = ["rock", "paper", "scissors"].sample

    def find_winner playerchoice, compchoice
      if playerchoice == compchoice
        "The result was a draw"
      elsif (playerchoice == 'rock' && compchoice == 'paper') || (playerchoice == 'paper' && compchoice == 'scissors') || (playerchoice == 'scissors' && compchoice == 'rock')
        "Your opponent masterfully outwitted you."
      else
        "Congratulations on your unlikely victory!"
      end
    end
    @result = find_winner @playerchoice, @compchoice
  end
end


def find_winner playerchoice, compchoice
  if playerchoice == compchoice
    "The result was a draw"
  elsif (playerchoice == 'rock' && compchoice == 'paper') || (playerchoice == 'paper' && compchoice == 'scissors') || (playerchoice == 'scissors' && compchoice == 'rock')
    "Your opponent masterfully outwitted you."
  else
    "Congratulations on your unlikely victory!"
  end
end
