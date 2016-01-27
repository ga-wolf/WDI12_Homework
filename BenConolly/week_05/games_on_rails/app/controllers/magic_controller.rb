class MagicController < ApplicationController
  def home
  end

  def answer
    @answer = answers.sample
  end
end


def answers
  ["Answer unclear.", "Almost certainly.", "Avoid this at all costs.", "You do not want to know the answer to that.", "The future is ever-changing.", "If you live long enough.", "Only during a full moon.", "Not unless you change your ways."]
end