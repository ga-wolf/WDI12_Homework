require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/movie' do
  @symbol = params[:symbol]
  redirect_to('/') if @symbol == ''

  movie_title = @symbol
  movie_url ="http://omdbapi.com/?t=#{ movie_title }"
  movie_info= HTTParty.get movie_url
  @poster = movie_info['Poster']

  erb :movie
end




