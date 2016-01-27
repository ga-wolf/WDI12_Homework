Rails.application.routes.draw do
  root :to => 'pages#home'

 get '/home' => 'pages#home'

 get '/magic' => 'magic#question'

 get '/magic/answer' => 'magic#answer'

 get '/number' => 'number#guess'

 get '/number/answer' => 'number#answer'

 get '/rps' => 'rps#guess'

 get '/rps/result' => 'rps#result'
 
end
