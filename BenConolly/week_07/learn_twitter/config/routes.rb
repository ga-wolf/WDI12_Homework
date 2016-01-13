Rails.application.routes.draw do
  resources :tweets
  root :to => 'pages#start'
end
