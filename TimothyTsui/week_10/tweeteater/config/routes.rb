Rails.application.routes.draw do
  root :to => 'fishies#tweets'
  get '/tweets' => 'fishies#tweets'
  get '/pages/:id' => 'fishies#pages'

end
