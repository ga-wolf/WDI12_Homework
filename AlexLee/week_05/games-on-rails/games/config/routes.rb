Rails.application.routes.draw do
  root :to => "pages#home"
  get "/home" => "pages#home"

  get "/eightball" => "eightball#answer"
  get "/number" => "number#secret_number"
  get "/number/:guess" => "number#guess"
  get "/rps_lizard_spock" => "rps#rps_lizard_spock_play"
  get "/rock_paper_scissors/:throw" => "rps#rock_paper_scissors_play"
end
