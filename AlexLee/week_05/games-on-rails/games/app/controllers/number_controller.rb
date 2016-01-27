class NumberController < ApplicationController
    def secret_number
        @numbers = [1,2,3,4,5,6,7,8,9,10]
    end

    def guess
        number = Random.new.rand(1..10)
        if params[:guess]
            if params[:guess] == number.to_s
                @answer = "You guessed it!"
            else
                @answer = "Sorry, you're wrong!"
            end
        end
    end
end