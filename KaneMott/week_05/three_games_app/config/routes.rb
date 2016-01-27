Rails.application.routes.draw do

root :to => "pages#home"
get '/rps' => "rps#rock_paper_scissors"
get '/number_guess' => 'one_to_ten#number_guess'
get '/magic_eight_ball' => 'magic_eight#meight'
end