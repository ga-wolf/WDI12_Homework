require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

def replace_empty_poster(movie)
  if movie['Poster'] == 'N/A'
    movie['Poster'] = 'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg'
  end
end

# show the movie search form
get '/' do
  erb :movies_search
end

# search OMDB and show results
get '/search_movies' do
  query = params[:movie_input]
  @movies = HTTParty.get("http://www.omdbapi.com/?s=#{ query }&type=movie")['Search']
  if @movies.nil?
    @message = "No results found with search '#{ params[:movie_input] }'"
    erb :movies_search
  elsif @movies.length == 1
    @movie = @movies.first
    replace_empty_poster(@movie)
    erb :movies_show
  elsif @movies.length > 1
    @movies.each do |movie|
      replace_empty_poster(movie)
    end
    erb :movies_index
  end
end

# show a single movie poster based on imdb ID
get '/query_imdbID' do
  imdbID = params[:id]
  @movie = HTTParty.get("http://www.omdbapi.com/?i=#{ imdbID }")
  replace_empty_poster(@movie)
  erb :movies_show
end