Rails.application.routes.draw do
  get 'oceans/new' => 'oceans#create'
  get '/' => 'oceans#index'
  get '/oceans' => 'oceans#index'
  get 'oceans/:id' => 'oceans#view'
  post '/oceans' => 'oceans#new'
  get'/oceans/:id/edit' => 'oceans#edit'
  post'/oceans/:id' => 'oceans#update'
end
