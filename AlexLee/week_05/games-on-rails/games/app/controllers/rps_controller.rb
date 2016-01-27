class RpsController < ApplicationController
    def rock_paper_scissors_play
        rock_paper_scissors_play = {
          :rock => {:rock => "draw", :paper => "paper", :scissors => "rock", :lizard => "rock", :spock => "spock"},

          :paper => {:rock => "paper", :paper => "draw", :scissors => "scissors", :lizard => "lizard", :spock => "paper"},

          :scissors => {:rock => "rock", :paper => "scissors", :scissors => "draw", :lizard => "scissors", :spock => "spock"},

          :lizard => {:rock => "rock", :paper => "lizard", :scissors => "scissors", :lizard => "draw", :spock => "lizard"},

          :spock => {:rock => "spock", :paper => "paper", :scissors => "spock", :lizard => "lizard", :spock => "draw"}
        }

        if params[:throw]
            options = [:rock, :paper, :scissors, :lizard, :spock]
            rand = Random.new.rand(options.length)
            @computer_choice = options[rand]
            @player_choice = params[:throw]

            @result = rock_paper_scissors_play[@player_choice.downcase.to_sym][@computer_choice]

            if @result == @player_choice
                @result = "You win with #{@player_choice.capitalize}."
            elsif @result == @computer_choice.to_s
                @result = "Computer wins with #{@computer_choice.capitalize}."
            else
                @result = "It's a draw."
            end

        end

    end

    def rps_lizard_spock_play
        rock_paper_scissors_play = {
          :rock => {:rock => "draw", :paper => "paper", :scissors => "rock", :lizard => "rock", :spock => "spock"},

          :paper => {:rock => "paper", :paper => "draw", :scissors => "scissors", :lizard => "lizard", :spock => "paper"},

          :scissors => {:rock => "rock", :paper => "scissors", :scissors => "draw", :lizard => "scissors", :spock => "spock"},

          :lizard => {:rock => "rock", :paper => "lizard", :scissors => "scissors", :lizard => "draw", :spock => "lizard"},

          :spock => {:rock => "spock", :paper => "paper", :scissors => "spock", :lizard => "lizard", :spock => "draw"}
        }

        if params[:throw]
            options = [:rock, :paper, :scissors, :lizard, :spock]
            rand = Random.new.rand(options.length)
            @computer_choice = options[rand]
            @player_choice = params[:throw]

            @result = rock_paper_scissors_play[@player_choice.downcase.to_sym][@computer_choice]

            if @result == @player_choice
                @result = "You win with "
                @winner = "#{@player_choice}"
            elsif @result == @computer_choice.to_s
                @result = "Computer wins with "
                @winner = "#{@computer_choice}"
            else
                @result = "It's a draw."
            end

        end
    end
end