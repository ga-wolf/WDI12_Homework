Rails.application.routes.draw do
  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  get '/mountains/:id' => 'mountains#show'
  post '/mountains' => 'mountains#create'
  delete '/mountains/:id' => 'mountains#delete'
  get '/mountains/:id/edit' => 'mountains#edit'
  post '/mountains/:id' => 'mountains#update'
end
