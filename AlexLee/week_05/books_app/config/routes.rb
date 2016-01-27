Rails.application.routes.draw do
  get "/" => "authors#index"
  resources :authors, :books
end
