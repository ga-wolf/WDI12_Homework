class MagicEightBallController < ApplicationController
  def question
  end

  def answer
    @question = params[:question]
    answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Signs point to yes', 'Yes', 'Outlook good', 'Most likely', 'As I see it, yes', 'You may rely on it', 'Yes, definitely', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
    @answer = answers[rand(15)]
  end
end