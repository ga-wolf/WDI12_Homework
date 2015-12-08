Rails.application.routes.draw do
  get '/' => 'oceans#index'
  get '/new' => 'oceans#new'
  get '/:id' => 'oceans#show'
  post '/' => 'oceans#create'
  delete '/:id' => 'oceans#destroy'
  get '/:id/edit' => 'oceans#edit'
  post '/:id' => 'oceans#update'
end
