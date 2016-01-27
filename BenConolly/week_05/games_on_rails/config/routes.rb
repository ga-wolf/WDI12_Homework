Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic8ball' => 'magic#home'
  get '/magic/tellme' => 'magic#answer'

  get '/numberguess' => 'numberguess#home'
  get '/numberguess/check' => 'numberguess#check'
  get '/numberguess/guessagain' => 'numberguess#guessagain'

  get '/rps' => 'rps#home'
  get '/rps/winneris' => 'rps#winneris'
end
