class OneToTenController < ApplicationController

def number_guess
	@comp_pick = (1..10).to_a.sample
	@play_pick = params[:player_number].to_i
		if @comp_pick == @play_pick 
			@result = "WINNER!"
		else
			@result = "LOSER!"
		end
	end
end