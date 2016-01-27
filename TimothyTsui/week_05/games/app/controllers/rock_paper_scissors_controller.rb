class RockPaperScissorsController < ApplicationController
  def form
  end

  def play
    moves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    map = {'rock' => 0,
          'paper' => 1,
          'scissors' => 2,
          'lizard' => 3,
          'spock' => 4}

    winMatrix = [[0, -1, 1, 1, -1],
                [1, 0, -1, -1, 1],
                [-1, 1, 0, 1, -1],
                [-1, 1, -1, 0, 1],
                [1, -1, 1, -1, 0]]

    computer = rand(0..4)
    @computerMove = moves[computer]
    @input = params[:throw]
    move = map[@input]
    result = winMatrix[move][computer]
    if result == 1
      @result = 'win'
    elsif result == -1
      @result = 'lose'
    else
      @result = 'tied'
    end
  end
end