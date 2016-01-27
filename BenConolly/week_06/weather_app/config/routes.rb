Rails.application.routes.draw do
  root :to => 'pages#weather'
  get '/weather' => 'pages#weather'
end
