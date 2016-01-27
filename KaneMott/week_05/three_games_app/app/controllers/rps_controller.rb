class RpsController < ApplicationController

	def rock_paper_scissors
		@computer_rps = ["rock", "paper", "scissors"].sample.to_sym
		@player_rps = params[:player_rps].downcase.to_sym

	@rules = {
	  :rock     => {:rock => :draw, :paper => :paper, :scissors => :rock},
	  :paper    => {:rock => :paper, :paper => :draw, :scissors => :scissors},
	  :scissors => {:rock => :rock, :paper => :scissors, :scissors => :draw}
	}

	def play(p1, p2)
	  @rules[p1][p2]
	end

	@winner = play(@player_rps,@computer_rps)
	end
end