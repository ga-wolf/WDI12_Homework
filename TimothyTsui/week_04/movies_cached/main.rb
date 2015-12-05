require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'movies.db'
)

class Movie < ActiveRecord::Base
end

def replace_empty_poster(movie)
  if movie['Poster'] == 'N/A'
    movie['Poster'] = 'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg'
  end
end

def update_db(title)
  # retrieve movies matching 'title' from omdb
  query = params[:movie_input]
  omdb_result = HTTParty.get("http://www.omdbapi.com/?s=#{ query }&type=movie")['Search'].first
  # store a copy on the db
  movie = Movie.new
  # binding.pry
  movie.title = omdb_result['Title']
  movie.image = omdb_result['Poster']
  movie.save
end

after do
  ActiveRecord::Base.connection.close
end

# show the movie search form
get '/' do
  erb :movies_search
end

# search OMDB and show results
get '/search_movies' do
  # search for record in own db
  @movies = Movie.find_by(['title LIKE ?', params[:movie_input] + '%'])
  if @movies.nil?
    update_db(params[:movie_input])
  # else
  #   return "found movie!"
  end

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