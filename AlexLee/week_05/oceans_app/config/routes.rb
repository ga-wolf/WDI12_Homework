Rails.application.routes.draw do
  get "/oceans" => "oceans#index"
  get "/oceans/new" => "oceans#new"
  get "/oceans/:id" => "oceans#show"
  post "/oceans" => "oceans#create"
  delete "/oceans/:id" => "oceans#destroy"
  get "/oceans/:id/edit" => "oceans#edit"
  post "/oceans/:id" => "oceans#update"
end