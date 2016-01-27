require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

def replace_empty_poster(movie)
    # binding.pry
    if movie['Poster'] == 'N/A'
      movie['Poster'] = 'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg'
    end
end

get '/' do
  erb :home
end

get '/search_movies' do
  query = params[:movie_input]
  @movies = HTTParty.get("http://www.omdbapi.com/?s=#{ query }&type=movie")['Search']
  @movies.each do |movie|
    replace_empty_poster(movie)
  end
  if @movies.length == 1
    @movie = @movies[0]
    erb :show_movie
  elsif @movies.length > 1
    # binding.pry
    erb :list_movies
  end
end

get '/query_imdbID' do
  imdbID = params[:id]
  @movie = HTTParty.get("http://www.omdbapi.com/?i=#{ imdbID }")
  # binding.pry
  replace_empty_poster(@movie)
  erb :show_movie
end