require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/findfilm' do
  @movie_title = params[:title]
  redirect to('/') if @movie_title == ''
  movie_url = "http://www.omdbapi.com/?t=#{ @movie_title }";
  movie_info = HTTParty.get movie_url;
  redirect to('/') unless movie_info["Response"] == "True"
  @poster = movie_info['Poster']


  erb :poster
end


#params[:symbol].upcase



# movie_title = params[:title]
# movie_info = HTTParty.get 'http://www.omdbapi.com/?t=#{ movie_title }';
# movie_info["Poster"]
# movie_info (anything else you want to include)



# movie_url = 'http://www.omdbapi.com/?t=#{ movie_title }';


# solve for garbage strings for nonexistent movies