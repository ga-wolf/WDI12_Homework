class NumberPickerController < ApplicationController
  def form
  end

  def play
    @secretNum = rand(1..11)
    @input = params[:input].to_i
    if @input == @secretNum
      render :win
    else
      render :lose
    end
  end
end