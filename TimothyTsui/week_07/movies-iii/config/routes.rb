Rails.application.routes.draw do
  root 'pages#search'
  get '/timeout' => 'pages#timeout'

end
